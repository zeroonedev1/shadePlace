import React, { useState } from "react";
import { db } from "./Firebase";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("place")
      .add({
        spotName: name,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="so...there is this place...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">🤘</button>
      </form>
    </div>
  );
};

export default Form;
