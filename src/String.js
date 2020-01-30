import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class String extends Component {
  render() {
    return <div>hello</div>;
  }
}
ReactDOM.render(<String />, document.querySelector("#root"));

