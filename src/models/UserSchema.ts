import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true

    },
    age:{
        type:Number,
        // required:true
    },
    phone:{
        type:String,
        // required:true 
    },
    address:{
        type:String,
        // required:true 
    },
    image:{
        type:String
    }


})

const UserModel = mongoose.model('UserData', UserSchema);

export default UserModel;