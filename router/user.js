const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");

const UserRouter = express.Router();

UserRouter.get("/", getUsers).get("/:id", getUser);

module.exports = UserRouter;
