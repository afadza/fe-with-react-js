import React from "react";
import User from "./Components/User";
import Age from "./Components/Age";
import Agree from "./Components/Agree";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <User />
          <Age />
          <Agree />
        </div>
      </React.Fragment>
    );
  }
}
