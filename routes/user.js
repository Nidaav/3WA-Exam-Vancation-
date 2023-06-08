const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");
const userService = require("../services/userService");

const initializePassport = require("../passport-config");
initializePassport(
  passport,
  (email) => userService.getUserByEmail(email),
  (id) => userService.getUserById(id)
);

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    message: "Login successful",
    user: req.user,
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  });
});

router.get("/:userId", userController.getOneUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userId", userController.deleteOneUser);

module.exports = router;
