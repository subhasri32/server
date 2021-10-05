const route = require("express").Router();

const service = require("../services/answers.service");

route.get("/answers", service.findQuestions);
route.post("/answers", service.insertquestions);
route.put("/answers/:id", service.updateQuestions);
route.delete("/answers/:id", service.deleteQuestions);

module.exports = route;
