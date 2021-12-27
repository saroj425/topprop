const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projfor:{
    type:String,
    requireed:[true,"Please Select Sale/Rent."],
  },
  projtype:{
    type:String,
    required:[true,"Please Select project type"]
  },
  city:{
    type:String,
    required:[true,"Please enter city."]
  },
  projectname:{
    type:String,
    required:[true,"Please enter project name."],
    trim:true
  },
  projlocality:{
    type:String,
    required:[true, "Please enter project locality."]
  },
  price:{
    type:Number,
    required:[true,"Please enter price."]
  },
  unittype:{
    type:String,
    required:[true, "Please enter unit type."]
  },
  unitsize:{
    type:String,
    requireed:[true, "Unit size is required."]
  },
  projectimage:{
    type:Array,
    required:true
  },
  floorplan:{
    type:Array,
    required:true
  },
  masterplan:{
    type:Array,
    required:true
  },
  projvideo:{
    type:Array,
    required:true
  },
  projaddroom:{
    type:Array,
    required:false
  },
  projpossttus:{
    type:String,
    required:true
  },
  projfurnishstatus:{
    type:String,
    required:true
  },
  ageofprojec:{
    type:String,
    required:true
  },
  noofrooms:{
    type:String,
    required:true
  },
  noofbathroom:{
    type:String,
    required:true
  },
  noofparking:{
    type:String,
    required:true
  },
  viewfacing:{
    type:String,
    required:true
  },
  towername:{
    type:String,
    required:true
  },
  totalnooffloors:{
    type:String,
    required:true
  },
  unitno:{
    type:String,
    required:true
  },
  adddetails:{
    type:Array,
    required:true
  },
  definelocation:{
    type:Array,
    required:true
  },
  suitablefor:{
    type:Array,
    required:true
  },
  description: {
    type: String,
    default: null
  },
  created_ts: {
    type: String,
    default: Date.now
  },
  updated_ts: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Project", projectSchema);
