const Todo = require("../models/Todo");
const create = async (req, res) => {
  console.log("BODY", req.body)
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      error: "Title and description are required",
    });
  }

  const todo = new Todo({
    title,
    description,
  });
  await todo.save();

  return res.status(201).json({
    message: "Todo created successfully",
    data: todo,
  });
}

const list = async (req, res) => {
  const todos = await Todo.find();
  return res.status(200).json({
    data: todos,
  });
}

module.exports = {
  create,
  list,
};
