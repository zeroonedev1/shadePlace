import React, { Component } from "react";
import * as firebase from "firebase";
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
    console.log("mounted");
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
      console.log("Final Array", this.state.finalArray);
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
            <tbody>
              {this.state.finalArray.map((place, index) => (
                <tr key={index} className="scroll-list">
                  <li className="scroll-list__item">
                    <p className="submitted-place">{place.spotName}</p>

                    <p className="submitor-name">
                      -tossed by <mark>{place.senderName} </mark>
                    </p>
                  </li>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlacesListFirebase;
