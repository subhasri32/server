const jwt = require("jsonwebtoken");

const middleware = {
  authCheck(req, res, next) {
    const token = req.headers["auth-token"];
    if (token) {
      try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
      } catch (err) {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  },
  logging(req, res, next) {
    console.log(
      `[${new Date()}] - ${req.user.userId} - ${req.url} - ${req.method}`
    );
    next();
  },
  answerAuth(req, res, next){
    if (req.answer._id.equals(req.user.id)) 
    return next();
    res.status(401).end();
  },
  commentAuth(req, res, next){
    if (req.comment.author._id.equals(req.user.id)) 
    return next();
    res.status(401).end();
  },
  questionsAuth(req, res, next){
    if (req.question.author._id.equals(req.user.id)) 
    return next();
    res.status(401).end();
  }
  
};

module.exports = middleware;
