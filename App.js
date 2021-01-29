import express from "express";
import Cors from "cors";
import PostSchema from "./modules/Post.js";
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


//How to listen to server
app.listen(7000);
