import React from "react";
import "./Home.css";
import Form from "./Form";
import PlacesListFirebase from "./PlacesListFirebase";

const Home = () => {
  return (
    <div className="contain">
      <p>393002</p>
      <div className="stars">
        <div className="small"></div>
        <div className="medium"></div>
        <div className="big"></div>
      </div>
      <div className="bodymain">
        <div className="left">
          <Form />
        </div>
        <div className="right">
          <div className="imagemain">
            <img
              alt="timer"
              width={"570px"}
              height={"520px"}
              src={require("../Assets/map.png")}
            />
          </div>
          <div className="fire">
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
            {/* TOOLTIP */}
            <div className="item-hints">
              <div className="hint" data-position="4">
                <span className="hint-dot"></span>
                <div className="hint-content do--split-children">
                  <p className="textinfo">
                    I have been here at Home past 5 months and thats the
                    most time I have spend in GIDC since last 7 Years. The
                    Winter Chill brings back all them old memories which lead me
                    to create 393002. Lets share the cooest and unexplored
                    places of Ank.
                  </p>
                </div>
              </div>
            </div>

            <div className="logs"></div>
            <div className="logs"></div>
          </div>
        </div>
      </div>
      <PlacesListFirebase />
      <p className="footer">
        Designed and Developed with <mark>❤</mark> by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/dholu_effect/"
        >
          {" "}
          Shubham Dholu,{" "}
        </a>
        using <strong>React</strong> - a Facebook Framework, <strong>FireStore</strong> - a Google Database & the
        BEST Samosas by<mark>MOM!</mark>
      </p>
    </div>
  );
};

export default Home;
