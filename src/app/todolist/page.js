"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FormPage from "../components/FormPage";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    axios
      .get(`/api/users/createtodo`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err.response));
  }, [filteredData]);
  console.log("todos data", todos);

  const editTodo = (id) => {
    const filteredData = todos.find((todo) => todo._id === id);
    setFilteredData(filteredData);
    console.log("filtered data", filteredData);
  };

  return (
    <div>
      {!filteredData ? (
        <div>
          {todos?.map((todo) => {
            return (
              <div key={todo._id}>
                <h1 style={{ fontSize: "25px" }}>{todo.title}</h1>
                <p>{todo.text}</p>
                <button onClick={() => editTodo(todo._id)}>edit</button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <FormPage
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
