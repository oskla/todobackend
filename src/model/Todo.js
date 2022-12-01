import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Todo = model("Todo", TodoSchema);

export default Todo;
