import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setFinalName(name);
    event.preventDefault(); //prevents the refresh caused by the submit button
  }

  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
