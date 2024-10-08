const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { updateUser } = require("../controller/users/updateUser");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUser");

const UserRouter = express.Router();

UserRouter.get("/users", getUsers)
  .get("/:id", getUser)
  .put("/:id", updateUser)
  .post("/addUser", createUser)
  .delete("/deleteUser/:id", deleteUser);

module.exports = UserRouter;
