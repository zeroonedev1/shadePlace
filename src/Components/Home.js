import React from "react";
import "./Home.css";
import arrow from "../Assets/arrow.jpg";
import Form from './Form'

function Home() {
  return (
    <div>
      <section>ANK GIDC</section>
      <div className="bodymain">
        <div className="left">
          <p>A place thats awesome and underated </p>
          <div>
           <Form/>
          </div>
        </div>
        <div className="right">
          <div className="imagemain">
            <img
              alt="timer"
              width={"600px"}
              src={require("../Assets/arrow.jpg")}
            />
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
