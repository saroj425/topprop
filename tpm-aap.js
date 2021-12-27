const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const validator = require("express-validator");
const dotenv = require("dotenv");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

const config = require("./api/configs/database");

//api routes handler
const apiUserRoutes = require("./api/routes/user.route");
const apiAdminRoutes = require("./api/routes/admin.route")
const apiCategoryRoute = require("./api/routes/category.route");
const apiPostRoute = require("./api/routes/projects.route");

//web routes handler
const webRoutes = require("./web/routes/home.route");
const webUserRoutes = require("./web/routes/user.route");
const webAdminRoutes = require("./web/routes/admin.route");

//TEST ROUTE
const testRoutes = require("./web/routes/test.route");
app.use("/test", testRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/user", express.static(path.join(__dirname, "/public")));
app.use("/admin", express.static(path.join(__dirname, "/public")));
app.use("/user/:id", express.static(path.join(__dirname, "/public")));
app.use("/admin/:id", express.static(path.join(__dirname, "/public")));



app.use(validator());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(flash());

app.use(session({
  name : 'tpmsecret',
  secret : 'TOP_PROP_MART_SECRET',
  resave :false,
  saveUninitialized: true,
  cookie : {
          maxAge:(1000 * 60 * 100)
  }      
}));

app.use(require("connect-flash")());
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

//Database Connections Starts
mongoose.connect(config.database, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    createIndexes:true 
});
let db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("disconnected", () => console.log("Disonnected to MongoDB"));
db.on("reconnected", () => console.log("Reconnected to MongoDB"));
db.on("error", err => console.log(err));
//Database Connections Ends

//api routes
app.use("/api/user", apiUserRoutes);
app.use("/api/admin", apiAdminRoutes);
app.use("/api/projects", apiPostRoute);
//web routes
app.use("/", webRoutes);
app.use("/user/", webUserRoutes);
app.use("/admin",webAdminRoutes);
// app.use("/post", webPostRoutes);
// app.use("/category", webCategoryRoutes);

//Heroku Deployment
if(process.env.NODE_ENV =="production"){
  app.use(express.static("frontend/build"));
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
