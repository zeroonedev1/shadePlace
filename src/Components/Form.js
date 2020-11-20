import React, { useState } from "react";
import {db} from './Firebase'  
// import db from './Firebase' 

import "./Form.css";

const Form = () => {
  const [venue, setvenue] = useState("");
  const [senderName, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("place")
      .add({
        spotName: venue,
        senderName: senderName,
      })
      .then(() => {
        alert("Thank you for your submittion bro, I love you, refresh to see your entry :)");
      })
      .catch((error) => {
        alert(error.message);
      });
    setname("");
    setvenue("");
  };
  return (
    <div>
      <p>My name is</p>
      <input
        type="text"
        placeholder=""
        value={senderName}
        onChange={(e) => setname(e.target.value)}
      ></input>
      <p>& I think</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="this place...."
          value={venue}
          onChange={(e) => setvenue(e.target.value)}
        ></input>
        <button type="submit"><span role='img' alt='send'>✌</span></button>
        <p>is awesome and underated</p>
      </form>
    </div>
  );
};

export default Form;
