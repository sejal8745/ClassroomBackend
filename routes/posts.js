const express = require("express");
const Post = require("../modules/Post");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on posts");
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const post = new Post({
    classname: req.body.classname,
    subject: req.body.subject,
    roomlink: req.body.roomlink,
    section: req.body.section,
    startDate: req.body.startDate,
    endDate: req.body.endDate,

  });

  post
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
