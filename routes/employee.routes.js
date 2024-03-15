const Router = require("express").Router();
const EmployeeController = require("../controller/employee.controller");

Router.get("/", EmployeeController.getAll);
Router.get("/count", EmployeeController.getCount);
Router.get("/:id", EmployeeController.getById);
Router.post("/", EmployeeController.create);
Router.put("/:id", EmployeeController.update);
Router.delete("/:id", EmployeeController.delete);

module.exports = Router;
