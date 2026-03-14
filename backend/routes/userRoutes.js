const {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
const { protectorMW, checkRoleMW } = require("../middlewares/authGuard");
const { signup } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", signup);
//router.route("/users").post(createUser).get(getAllUsers);
router
  .route("/users")
  .post(createUser)
  .get(protectorMW, checkRoleMW("admin", "user"), getAllUsers);

//router.route("/users/:id").get(getUserById).patch(updateUser).delete(deleteUser);

router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(checkRoleMW("admin"), deleteUser);

module.exports = router;
