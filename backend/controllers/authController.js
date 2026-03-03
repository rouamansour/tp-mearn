const User = require("../models/userModel");

exports.signup = async (req, res) => {
	try {
		const newUser = await User.create({
			...req.body,
			role: req.body.role === "admin" ? "user" : req.body.role,
		});
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
};
