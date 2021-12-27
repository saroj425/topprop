const Category = require("../../api/models/category.model");
const Countries = require("../../api/models/country.model");
const Post = require("../../api/models/projects.model");

exports.categories = async () => {
  try {
    const dbcats = await Category.find();
    return [...dbcats];
  } catch (e) {
    return e.message;
  }
};

exports.countries = async () => {
  try {
    const dbCountry = await Countries.find();
    return [...dbCountry];
  } catch (e) {
    return e.message;
  }
};

const escapeHtml = async text => {
  if (text) {
    var map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, function(m) {
      return map[m];
    });
  }
  return null;
};

exports.getPosts = async userid => {
  try {
    const dbPostAds = await Post.find({ userid: userid }).populate({
      path: "categoryid",
      model: Category,
      select: "c_name"
    });
    const data = [...dbPostAds];
    return {
      posts: await Promise.all(
        data.map(async doc => {
          return {
            ...doc._doc,
            images: doc.images.map(pic => {
              return { filename: pic.filename };
            }),
            description: doc.description,
            btitle: doc.btitle,
            c_name: doc.categoryid.c_name,
            price: doc.price
          };
        })
      )
    };
  } catch (e) {
    return e.message;
  }
};

// exports.getPosts = async userid => {
//   try {
//     const dbPostAds = await Post.find({ userid: userid })
//       .populate({
//         path: "userid",
//         model: User,
//         select: "fname lname profilepic username"
//       })
//       .populate({
//         path: "categoryid",
//         model: Category,
//         select: "categoryname"
//       })
//       .populate({
//         path: "subctid",
//         model: SubCategory,
//         select: "fname lname profilepic username"
//       })
//       .populate({
//         path: "bcountry",
//         model: Country,
//         select: "categoryname"
//       })
//       .populate({
//         path: "bstate",
//         model: State,
//         select: "fname lname profilepic username"
//       })
//       .populate({
//         path: "bcity",
//         model: City,
//         select: "categoryname"
//       });
//     return [...dbPostAds];
//   } catch (e) {
//     return e.message;
//   }
// };
