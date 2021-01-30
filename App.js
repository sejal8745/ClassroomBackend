import express from "express";
import Cors from "cors";
import PostSchema from "./modules/Post.js";
import ProjectSchema from "./modules/Project.js";
import BookSchema from "./modules/Book.js";
const app = express();
import mongoose from "mongoose";
app.use(express.json());
app.use(Cors());




const connection_url = "mongodb+srv://monster:monster23@project.bqfih.mongodb.net/personalInfo?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => console.log("connected"));

//For ClassRoom
app.post("/info", (req, res) => {
  const dbInfo = req.body;
  console.log(req.body);
  PostSchema.create(dbInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      console.log(data);
    }
  });
});

app.get("/info", (req, res) => {
  PostSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//For Project
app.post("/project", (req, res) => {
  const dbInfo = req.body;
  console.log(req.body);
  ProjectSchema.create(dbInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      console.log(data);
    }
  });
});

app.get("/project", (req, res) => {
  ProjectSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


//For Book Suggestions
app.post("/book", (req, res) => {
  const dbInfo = req.body;
  console.log(req.body);
  BookSchema.create(dbInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      console.log(data);
    }
  });
});

app.get("/book", (req, res) => {
  BookSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/info/:id" , (req, res) => {
  console.log(req.params.id);
  PostSchema.findById(req.params.id)
  .then(result=>{
    res.status(200).json({PostSchema: result})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: err})
  }) 
})

//How to listen to server
app.listen(7000);
