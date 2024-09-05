import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import TodoList from "../Components/TodoList";
import CreateList from "../Components/CreateList";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComponent;
