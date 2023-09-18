"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormPage = ({ filteredData, setFilteredData }) => {
  const router = useRouter();
  const [title, setTitle] = useState(
    filteredData?.title ? filteredData?.title : ""
  );
  const [text, setText] = useState(
    filteredData?.text ? filteredData?.text : ""
  );
  // const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      text: text,
    };

    if (filteredData?._id) {
      axios
        .put(`/api/users/createtodo/${filteredData?._id}`, formData)
        .then((res) => {
          if (res.data) {
            setFilteredData("");
            router.push("/todolist");
          }
        })
        .catch((err) => console.log(err.response));
    } else {
      axios
        .post(`/api/users/createtodo`, formData)
        .then((res) => {
          if (res.data) {
            router.push("/todolist");
            setFilteredData("");
          }
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <div style={{}} className="bg-transparent">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Hindustan Times..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Text</label>
        <input
          as="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
        />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormPage;
