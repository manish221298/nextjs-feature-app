"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FormPage from "../components/FormPage";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [deleteStatus, setDeleteStatus] = useState("");

  useEffect(() => {
    axios
      .get(`/api/users/createtodo`)
      .then((res) => {
        setTodos(res.data);
        setDeleteStatus("");
      })
      .catch((err) => {
        console.log(err.response);
        setDeleteStatus("");
      });
  }, [filteredData, deleteStatus]);
  console.log("todos data", todos);

  const editTodo = (id) => {
    const filteredData = todos.find((todo) => todo._id === id);
    setFilteredData(filteredData);
    console.log("filtered data", filteredData);
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/users/createtodo/${id}`).then((res) => {
      console.log("delleted data", res.data);
      setDeleteStatus(res.data.message);
    });
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
                <button onClick={() => deleteTodo(todo._id)}>delete</button>
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
