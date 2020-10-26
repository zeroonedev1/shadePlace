import React, { Component } from "react";
// import firebase from "./Firebase";

export class PlacesListFirebase extends Component {
  constructor(props) {
    super(props);
    this.state = { placeslist: [] };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("places-list")
      .on("value", (snapshot) => {
        let placeslist = [];
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          placeslist.push(snap.val());
        });
        this.setState({ placeslist: placeslist });
      });
  }

  render() {
    return (
      <div>
        <div className="MainDiv">
          <div class="jumbotron text-center bg-sky">
            <h3>How to show firebase data in reactjs?</h3>
          </div>

          <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                <tr>
                  <th>FirstName</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {this.state.placeslist.map((data) => {
                  return (
                    <tr>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                      <td>{data.mobileNumber}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PlacesListFirebase;
