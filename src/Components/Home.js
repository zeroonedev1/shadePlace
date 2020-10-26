import React from "react";
import "./Home.css";
import Form from "./Form";
// import PlacesListFirebase from './PlacesListFirebase';


const Home = () => {
  return (
    <div className="contain">
      <p>393002 is awesome!!</p>
      <div class="stars">
        <div class="small"></div>
        <div class="medium"></div>
        <div class="big"></div>
      </div>
      <div className="bodymain">
        <div className="left">
          <Form />
        </div>
        <div className="right">
          <div className="imagemain">
            <img
              alt="timer"
              width={"500px"}
              height={"402px"}
              src={require("../Assets/map.png")}
            />
          </div>
          <div class="fire">
            <div class="flames">
              <div class="flame"></div>
              <div class="flame"></div>
              <div class="flame"></div>
              <div class="flame"></div>
            </div>
            <div class="logs"></div>
            <div class="logs"></div>
          </div>
        </div>
      </div>
      {/* <PlacesListFirebase/> */}
    </div>
  );
};

export default Home;
