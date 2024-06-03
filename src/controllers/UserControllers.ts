import { Request, Response } from "express"
import UserModel from "../models/UserSchema"
import CloudinaryPass from "../helpers/Cloudinary";
import fs from 'fs'






//   C of crud 

export const CreateUsers = async(req:Request, res:Response)=>{
    const {name, email, age, phone, address} =req.body;
    let image = null;
    if (req.file) {
        try {
            
            image = await CloudinaryPass(req.file.path);
            console.log(image)
             // delete the file of image after uplaoding to coludinary 
             fs.unlink(req.file.path, (err)=>{
                if(err){
                    console.log("Failed to delete the file", err)
                }else{
                    console.log("Deleted sucesfyl!");
                }
             })

        } catch (error) {
            return res.status(500).json({ msg: "Failed to upload image", success: false });
        }
    }
   


  try {
    const newUser = await UserModel.create({
        name, email, age, phone, address, image
    })

    
    res.status(201).json({msg:"User created sucessfully brother!", sucess:true, user:newUser})
  } catch (error) {
     console.log(error)
     res.status(500).json({msg:"Unable to create user shit!", sucess:false})
  }


}



// R of crud 

export const GetUsers = async(req:Request,res:Response)=>{
    try {
        const findUser = await UserModel.find({})
        res.status(200).json({msg:"sucessfully found user", users:findUser, sucess:true})
        
    } catch (error) {
        console.log(error, "Error finding data of user") 
        res.status(500).json({msg:"Internal server error vayo", sucess:false})
    }


}

// D of crud 

export const DeleteUsers = async(req:Request, res:Response)=>{
    try {
        const idOfUser = req.params.id;
        const deleteUserById = await UserModel.findByIdAndDelete(idOfUser)
        if(!deleteUserById){
            res.status(404).json({msg:"Unable to find the user to delete demnnn", sucess:true})
        }
        res.status(201).json({msg:"User deleted sucessfully sorry dosti.", sucess:true, user:deleteUserById})

        
    } catch (error) {
        console.log(error, "Error deleting user")
        res.status(500).json({msg:"Internal server error", sucess:true})
    }


}

//  U of crud 

export const UpdateUsers = async(req:Request, res:Response)=>{
    try {
        const idOfUser = req.params.id;
        const updateUserById = await UserModel.findByIdAndUpdate(idOfUser, req.body);
        if(!updateUserById){
            res.status(404).json({msg:"Sorry bro you are not found ", sucess:false})
        }
        res.status(201).json({msg:"User updatedd sucessfully!", user:updateUserById, sucess:true })
        
    } catch (error) {
        console.log(error, "Error deleting user")
        res.status(500).json({msg:"Internal server error", sucess:true})
    }


}