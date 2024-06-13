const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImagePath:String,
  coverImagePath:String,
  isFrelancer:{
    type:Boolean,
    default:false
  },
  isClient:{
    type:Boolean,
    default:true,
  }
});

const User = mongoose.model("user",userSchema);

export default User;
