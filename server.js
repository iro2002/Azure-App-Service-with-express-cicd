const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Use Azure port

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Todo Schema
const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

// Routes
app.get("/", (req, res) => res.send("Hello World from Express"));

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add todo
app.post("/todos", async (req, res) => {
  const newTodo = new Todo({ task: req.body.task });
  await newTodo.save();
  res.json(newTodo);
});

// Update todo
app.put("/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { task: req.body.task, completed: req.body.completed },
    { new: true }
  );
  res.json(updatedTodo);
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
