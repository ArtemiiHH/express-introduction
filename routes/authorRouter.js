const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("Authors");
});
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});
authorRouter.post("/", (req, res) => {
  const newAuthor = req.body;
  res.json({
    message: "Author created",
    data: newAuthor,
  });
});

module.exports = authorRouter;
