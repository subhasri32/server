const route = require("express").Router();

const service = require("../services/comments.service");

route.get("/comments", service.findQuestions);
route.post("/comments", service.insertquestions);
route.put("/comments/:id", service.updateQuestions);
route.delete("/comments/:id", service.deleteQuestions);

module.exports = route;
