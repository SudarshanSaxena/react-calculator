import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultNumber: String,
      globalString: String
    };
    this.resultNumber = "";
    this.keyPress = this.keyPress.bind(this);
  }
  keyPress = c => {
    this.setState(() => {
      return {
        globalString: this.state.globalString.toString() + c.toString()
      };
    });
  };
  execCalc = s => {
    console.log(s.length);
    s = s.substring(35);
    if (s.indexOf("+") != -1) {
      var numbers = s.split("+");
      var x = parseInt(numbers[0]);
      var y = parseInt(numbers[1]);
      var sum = x + y;
      var ans = sum;
    } else if (s.indexOf("-") != -1) {
      var numbers = s.split("-");
      var x = parseInt(numbers[0]);
      var y = parseInt(numbers[1]);
      var sub = x - y;
      var ans = sub;
    } else if (s.indexOf("*") != -1) {
      var numbers = s.split("*");
      var x = parseInt(numbers[0]);
      var y = parseInt(numbers[1]);
      var mul = x * y;
      var ans = mul;
    } else if (s.indexOf("/") != -1) {
      var numbers = s.split("/");
      console.log(x);
      console.log(y);
      var div = x / y;
      var ans = div;
    }
    s = ans;
    this.setState(() => {
      return { resultNumber: parseInt(s) };
    });
  };

  render() {
    return (
      <div>
        <label htmlFor=''>{this.state.globalString}</label>
        <br></br>
        <label htmlFor=''>{this.state.resultNumber}</label>
        <br></br>
        <button onClick={() => this.keyPress("1")}>1</button>
        <button onClick={() => this.keyPress("2")}>2</button>
        <button onClick={() => this.keyPress("3")}>3</button>
        <br></br>
        <button onClick={() => this.keyPress("4")}>4</button>
        <button onClick={() => this.keyPress("5")}>5</button>
        <button onClick={() => this.keyPress("6")}>6</button>
        <br></br>
        <button onClick={() => this.keyPress("7")}>7</button>
        <button onClick={() => this.keyPress("8")}>8</button>
        <button onClick={() => this.keyPress("9")}>9</button>
        <br></br>
        <button onClick={() => this.keyPress("0")}>0</button>
        <br></br>
        <button onClick={() => this.keyPress("+")}>+</button>
        <button onClick={() => this.keyPress("-")}>-</button>
        <button onClick={() => this.keyPress("*")}>x</button>
        <button onClick={() => this.keyPress("/")}>/</button>
        <button onClick={() => this.execCalc(this.state.globalString)}>
          =
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
