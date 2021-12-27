const mongoose = require("mongoose")
const schema = mongoose.Schema;


const BlogSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, default: null },
    slug: { type: String, default: null },
    authorname:{type:String,required:true},
    description:{type:String,required:true}, 
    bodydesc:{type:String,required:true}, 
    publishdate:{type:Date,required:true},   
    photo: { type: Array, default:"img/author/img1.jpg" },
    link:{type:String,required:true},
    url:{type:String,required:true},
    created_ts: { type: String, default: Date.now },
    updated_ts: { type: String, default: null }
});

module.exports = mongoose.model("Blog",BlogSchema);