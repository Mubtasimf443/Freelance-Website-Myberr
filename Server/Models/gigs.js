import mongoose from "mongoose";

const GigSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  shortDescription : {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  longDescription:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  tags:{
    type:Array,
    required:true,
  },
  available :{
    type:Boolean,
    required:true
  },
  imagePath:{
    type:String,
    required:true,
  },
  videoPath:String,
  feelancerId:{
    type:String,
    required:true,
  }
});

const gigs = mongoose.model("gigs", GigSchema);

export default gigs;
