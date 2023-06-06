const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");
const userService = require("../services/userService");

const initializePassport = require("../passport-config");
// requete pour trouver un user par son email, par son id
initializePassport(
  passport,
  (email) => userService.getUserByEmail(email),
  (id) => userService.getUserById(id)
);

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

// Login endpoint
router.post("/login", passport.authenticate("local"), (req, res) => {
  // console.log('res:', res)
  // console.log('req:', req)
  res.json({
    message: "Login successful",
    user: req.user,
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  });
});

// Logout endpoint
// router.get("/logout", (req, res) => {
//   req.logout();
//   res.json({ message: "Logout successful" });
// });

router.get("/:userId", userController.getOneUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userId", userController.deleteOneUser);

module.exports = router;
