const Post = require("../models/projects.model");
const mongoose = require("mongoose");



const titleToSlug = title => {
  let slug;
  // convert to lower case
  slug = title.toLowerCase();
  // remove special characters
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  // The /gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string
  // replace spaces with dash symbols
  slug = slug.replace(/ /gi, "-");
  // remove consecutive dash symbols 
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  // remove the unwanted dash symbols at the beginning and the end of the slug
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
};



_id: mongoose.Schema.Types.ObjectId,
exports.saveProject = async (req, res, next) => {
  req.check("projfor", "Please select sale or rent").notEmpty();
  req.check("projtype", "Project type is required").notEmpty();
  req.check("city", "City is required").notEmpty();
  req.check("projectname", "Project name is required").notEmpty();
  req.check("projlocality", "Locality is required").notEmpty();
  req.check("price", "Price is required").notEmpty();
  req.check("unittype", "Unit type is required").notEmpty();
  req.check("unitsize", "Unit size is requird").notEmpty();
  req.check("projectimage", "Project image is required").notEmpty();
  req.check("floorplan", "Floor plan is required").isEmail();
  req.check("masterplan", "Master plan is required").notEmpty();
  req.check("projvideo", "Project Video is required").notEmpty();
  req.check("projaddroom", "Additional room required").notEmpty();
  req.check("projpossttus", "Possession status required").notEmpty();
  req.check("projfurnishstatus", "Furnishing status required").notEmpty();
  req.check("ageofprojec", "Age of property is required").notEmpty();
  req.check("noofrooms", "No of rooms is required").notEmpty();
  req.check("noofbathroom", "No of bathrooms is required").notEmpty();
  req.check("noofparking", "No of parking is required").notEmpty();
  req.check("viewfacing", "View/Facing is required").notEmpty();
  req.check("towername", "Tower name is required").notEmpty();
  req.check("totalnooffloors", "Total no of floors is required").notEmpty();
  req.check("unitno", "Unit no is required").notEmpty();
  req.check("adddetails", "Additional details is required").notEmpty();
  req.check("definelocation", "Vacinity location is required").notEmpty();
  req.check("suitablefor", "Suitable for is required").notEmpty();
  req.check("description", "Descriptin is required").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var response = [];
    errors.forEach(err => {
      response.push(err.msg);
    });
    res.statusCode = 400;
    //return res.json(response);
    req.flash("err", response);
    return res.redirect("/user/post-ads");
  }
  try {
    if (req.files) {
      const {
        btitle,
        userid,
        categoryid,
        subctid,
        baddress,
        bcountry,
        bstate,
        bcity,
        bemail,
        bphone,
        termsncondition
      } = req.body;
      const postads = new Post({
        _id: new mongoose.Types.ObjectId(),
        btitle: btitle,
        userid: userid,
        categoryid: categoryid,
        subctid: subctid,
        baddress: baddress,
        bcountry: bcountry,
        bstate: bstate,
        bcity: bcity,
        bemail: bemail,
        bphone: bphone,
        burl: req.body.burl,
        images: req.files["photos"],
        price: req.body.price,
        description: req.body.desc,
        termsncondition: termsncondition
      });
      const savedPostAd = await postads.save();
      //res.status(201).json(savedPostAd);
      return res.redirect("/user/dashboard");
    } else {
      //res.status(201).json({ req });
      req.flash("err", "please");
      return res.redirect("/user/post-ads");
    }
  } catch (e) {
    //res.status(500).json(e.message);
    req.flash("err", e.message);
    return res.redirect("/user/post-ads");
  }
};


exports.getPosts = async (req, res, next) => {
  try {
    const dbPosts = await Post.find();
    res.status(200).json([...dbPosts]);
  } catch (e) {
    res.status(500).json(e.message);
  }
};