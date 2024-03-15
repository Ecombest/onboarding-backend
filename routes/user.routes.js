const Router = require("express").Router();
const UserController = require("../controller/user.controller");

Router.get("/", UserController.getUsers);
Router.get("/:id", UserController.getUserById);
Router.post("/", UserController.createUser);
Router.put("/:id", UserController.updateUser);
Router.delete("/:id", UserController.deleteUser);

module.exports = Router;
