const http = require("http");
const app = require("./tpm-aap");
const port = process.env.PORT || 3002;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server is UP on port ${port}`));
