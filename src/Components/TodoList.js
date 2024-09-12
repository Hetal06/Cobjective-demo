import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Delete from "@mui/icons-material/Delete";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [text, setText] = React.useState("");
  const [tasks, setTask] = React.useState([
    {
      id: 1,
      text: "first task",
      completed: true,
    },
    {
      id: 2,
      text: "first task",
      completed: false,
    },
    {
      id: 3,
      text: "first task",
      completed: true,
    },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTask([...tasks, newTask]);
    setText("");
  };

  function deleteTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    console.log("id 52", id);

    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <div className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    </>
  );
}
