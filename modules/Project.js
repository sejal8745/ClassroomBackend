import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    projectname: {
      type:String,
      required: true,
    },
    features: {
      type:String,
      required: true,
    },
    feature: {
      type:String,
      required: true,
    },
    features: {
      type:String,
      required: true,
    }

  });

  export default mongoose.model("Project", ProjectSchema) ;