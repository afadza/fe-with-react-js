import React from "react";
import User from  "./Components/User";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <p>Hallo World!</p>
          < User />
        </div>
      </React.Fragment>
    )
  }
}