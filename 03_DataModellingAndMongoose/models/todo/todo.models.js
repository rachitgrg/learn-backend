import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false, // we can assign default value to anyone
    },
    createdBy: {
      // it is a datatype just link string, bool, and int
      // it used when we want to give reference of some other model to connect
      type: mongoose.Schema.Types.ObjectId,
      // In next line it is compulsory to reference
      ref: "User", // always give same name as given in .models("...")
    },
    // subTodos: []      // we can give array just like this
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodos",
      },
    ], // Array of sub-todos
  },
  { timestamps: true },
);

export const todo = mongoose.model("todo", todoSchema);
