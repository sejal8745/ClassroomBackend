import express from "express";
import Cors from "cors";
import mongoose from "mongoose";
import postRoute from "./routes/posts.js";




const app = express();
app.use(express.json());
app.use(Cors());

app.use("/post", postRoute);


mongoose.connect("mongodb+srv://monster:monster23@project.bqfih.mongodb.net/personalInfo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true, 
  
}, () => console.log("connected"));


// app.get("/post", (req, res) => {
//     PostSchema.find((err, data) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   });



app.listen(7000);