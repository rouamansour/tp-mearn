const {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
const { signup } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", signup);
router.route("/users").post(createUser).get(getAllUsers);
router.route("/users/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
