import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, require: [true, "Title is required field"] },
    text: { type: String, required: [true, "Text is required field"] },
  },
  { timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
