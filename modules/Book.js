import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    bookname: {
      type:String,
      required: true,
    },
    authorname: {
      type:String,
      required: true,
    },
    bookimage: {
      type:String,
    },
    bookpdf: {
      type:String,
    }
  });

  export default mongoose.model("Book", BookSchema) ;