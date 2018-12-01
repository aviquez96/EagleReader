import React, { PureComponent, Fragment } from "react";

export default class section extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>{this.props.title}</div>
        <div>{this.props.img}</div>
      </Fragment>
    );
  }
}
