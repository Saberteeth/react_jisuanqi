import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeypodComponent from "./components/KeypodComponent";

class App extends Component {
  static TYPE_EQUAL = "=";
  static TYPE_AC = "AC";
  static TYPE_PORM = "+/-";
  static TYPE_PERCENT = "%";

  constructor() {
    super();
    this.state = {
      result: ""
    };
  }
  onClick = button => {
    // 在分组情况下，switch 比 if else 更清晰。并且可以通过 static 枚举来进行说明某个按键对应的触发。
    switch (button) {
      case App.TYPE_AC:
        this.reset();
        break;
      case App.TYPE_EQUAL:
        this.calculate();
        break;
      case App.TYPE_PERCENT:
        this.desk();
        break;
      case App.TYPE_PORM:
        this.backspace();
        break;
      default:
        this.setState({
          result: `${this.state.result}${button}`
        });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: `${eval(this.state.result) || ""}`
      });
    } catch (e) {
      this.setState({
        result: ""
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: - this.state.result
    });
  };

  desk = () => {
    this.setState({
      result: this.state.result * 0.01
    });
  };

  render() {
    return (
      <div className="calculator-body">
        <ResultComponent result={this.state.result} />
        <KeypodComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
