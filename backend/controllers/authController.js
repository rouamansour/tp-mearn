const User = require("../models/userModel");
const { sign } = require("jsonwebtoken");

const createToken = (id, name, email) => {
  return sign({ id, name, email, max: 8 }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

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

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Email and password are required !!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.isPassCorrect(password, user.password))) {
      res.status(400).json({
        message: "Email or password are incorrect !!",
      });
    }
    const token = createToken(user._id, user.name, user.email);
    res.status(200).json({
      message: "Logged In !!!",
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};