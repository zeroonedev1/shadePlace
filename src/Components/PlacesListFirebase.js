import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "./PlacesListFirebase.css";

export class PlacesListFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalArray: [],
    };
  }

  componentDidMount() {
    console.warn("I understand the curiosity, but what good shall this bring bro ? please press f12");
    let database = firebase.firestore();
    let query = database.collection("place");
    let data = [];
    query.get().then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {
        data.push(documentSnapshot.data());
      });
      this.setState({
        finalArray: data,
      });
      // console.log("Final Array", this.state.finalArray);
    });
  }
  render() {
    return (
      <div className="MainDiv">
        <div className="text-center bg-sky">
          {/* <h3>How to show firebase data in reactjs?</h3> */}
        </div>
        <div className="table-wrap">
          <table id="example" className="">
            <div>
              {this.state.finalArray.map((place, index) => (
                <div key={index} className="scroll-list">
                  <li className="scroll-list__item">
                    <p className="submitted-place">{place.spotName}</p>

                    <p className="submitor-name">
                      -tossed by <mark>{place.senderName} </mark>
                    </p>
                  </li>
                </div>
              ))}
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default PlacesListFirebase;
