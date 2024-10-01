import * as React from "react";
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
      text: "Second task",
      completed: false,
    },
    {
      id: 3,
      text: "third task",
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
