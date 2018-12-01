import React, { Component, Fragment } from "react";
import section from "./sections";
import bg from "";

export class landing extends Component {
  render() {
    return (
      <Fragment>
        <div>Landing</div>
        <section img={bg} title={"resume book"} />
        <section img={bg} title={"voice commands"} />
        <section img={bg} title={"toggle sound"} />
      </Fragment>
    );
  }
}

export default landing;
