const mongoose = require("mongoose")
const schema = mongoose.Schema;


const TestinomialSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, default: null },
    description:{type:String,required:true},
    authorname:{type:String,required:true},
    photo: { type: Array, default:"img/author/img1.jpg" },
    // link:{type:String,required:true},
    url:{type:String,required:true},
    created_ts: { type: String, default: Date.now },
    updated_ts: { type: String, default: null }
});

module.exports = mongoose.model("Testinomial",TestinomialSchema)