import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: "post",
      url: "http://localhost:8000/signup",
      data: {
        username,
        password,
      },
    });

    console.log({ response });
  };

  return (
    <div className="App">
      <form className="form">
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => handleUsername(e)}
        />
        <br />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => handlePassword(e)}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>sign up</button>
      </form>
    </div>
  );
}

export default App;
