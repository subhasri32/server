const route = require("express").Router();

const service = require("../services/questions.service");

route.get("/questions", service.findQuestions);
route.post("/questions", service.insertquestions);
route.put("/questions/:id", service.updateQuestions);
route.delete("/questions/:id", service.deleteQuestions);

module.exports = route;
