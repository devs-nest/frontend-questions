import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BsCheck2All } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const data = await fetch("https://sherdil.herokuapp.com/todo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: value,
        completed: false,
      }),
    });
    setValue("");
    getAllTodos();
  };

  const handleComplete = async (id) => {
    const data = await fetch(`https://sherdil.herokuapp.com/todo`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        completed: true,
        id: parseInt(id),
      }),
    });
    getAllTodos();
  };

  const handleCompleteFalse = async (id) => {
    const data = await fetch(`https://sherdil.herokuapp.com/todo`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        completed: false,
        id: parseInt(id),
      }),
    });
    getAllTodos();
  };

  const handleDelete = async (id) => {
    const data = await fetch(`https://sherdil.herokuapp.com/todo`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: parseInt(id),
      }),
    });
    getAllTodos();
  };

  const getAllTodos = async () => {
    const response = await fetch("https://sherdil.herokuapp.com/todos");
    const data = await response.json();
    setTodo(data);
  };

  useEffect(() => {
    getAllTodos();
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Todo Application</h1>
      <TextField
        id="standard-basic"
        label="Write a Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ maxWidth: "300px", width: "90vw" }}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {/* <pre>{JSON.stringify(todo, null, 2)}</pre> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90vw",
          fontSize: "2rem",
        }}
      >
        {todo &&
          todo.map((todo) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "10px",
              }}
            >
              <div>{todo.title}</div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "30px",
                  marginRight: "30px",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                {!todo.completed && (
                  <span
                    onClick={() => handleComplete(todo.id)}
                    style={{
                      display: "flex",
                      color: "red",
                    }}
                  >
                    <BsCheck2All />
                  </span>
                )}
                {todo.completed && (
                  <span
                    onClick={() => handleCompleteFalse(todo.id)}
                    style={{
                      display: "flex",
                      color: "green",
                    }}
                  >
                    <BsCheck2All />
                  </span>
                )}
                <span
                  onClick={() => handleDelete(todo.id)}
                  style={{
                    display: "flex",
                    color: "blue",
                  }}
                >
                  <FiTrash />
                </span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
