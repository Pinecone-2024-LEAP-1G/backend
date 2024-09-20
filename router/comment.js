const express = require("express");
const { getComments } = require("../controller/comments/getComments");

const CommentRouter = express.Router();

CommentRouter.get("/comments", getComments);

module.exports = CommentRouter;
