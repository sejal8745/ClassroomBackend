import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  roomlink: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    format: Date,
  },
  endDate: {
    type: String,
    format: Date,
  },
});

export default mongoose.model("Posts", PostSchema);
