const User = require("../models/userModel");
const mongoose = require("mongoose");
console.log(User);

// Arrow function- less memory
// Regular function - more memory 

//minimise flow data
exports.createUser = async (req,res) =>{
    try {
        const newUser = await  User.create(req.body);
        res.status(201).json({
            status:"success",
            data:{
                user:newUser
            }
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}
exports.getAllUsers = async (req,res) =>{
    try {
        const users = await  User.find();
        res.status(200).json({
            status:"success",
            data:{
                user : users,
                results: users.length
            }
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

exports.getUserById = async (req,res) =>{
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                status:"fail",
                message:"Invalid user id"
            })
        }
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                status:"fail",
                message:"User not found"
            })
        }
        res.status(200).json({
            status:"success",
            data:{
                user
            }
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

exports.updateUser = async (req,res) =>{
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                status:"fail",
                message:"Invalid user id"
            })
        }
        let user;

        if (req.body.password || req.body.passwordConfirm) {
            user = await User.findById(req.params.id);

            if (!user) {
                return res.status(404).json({
                    status:"fail",
                    message:"User not found"
                })
            }

            user.name = req.body.name ?? user.name;
            user.email = req.body.email ?? user.email;
            user.password = req.body.password ?? user.password;
            user.passwordConfirm = req.body.passwordConfirm ?? user.passwordConfirm;

            await user.save();
        } else {
            user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
        }

        if(!user){
            return res.status(404).json({
                status:"fail",
                message:"User not found"
            })
        }
        res.status(200).json({
            status:"success",
            data:{
                user
            }
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

exports.deleteUser = async (req,res) =>{
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                status:"fail",
                message:"Invalid user id"
            })
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json()
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}