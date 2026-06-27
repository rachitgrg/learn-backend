import mongoose, { trusted } from "mongoose";

const SubTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { TimeStamps: true },
);

export const SubTodos = mongoose.models("SubTodos", SubTodoSchema);
