import React from "react";

import Goodbye from "./GoodBye.component";

class HelloWorld extends React.Component {
  constructor(props) {
    console.log("Constructor called");
    super(props);

    this.state = {
      iphone: "iphone",
      huawei: "Huawei",
      nokia: "Nokia",
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.setState({ iphone: "iphone12Pro" });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  onClickHandler() {
    this.props.getHuawei(this.state.huawei);
  }

  render() {
    return (
      <div>
        Almost everyone has a Smart{this.props.phone}. Some use{" "}
        {this.state.iphone}, some use {this.props.samsung}, Or some use ...{" "}
        <button onClick={this.onClickHandler}>which brand</button> ? But some
        people still use a {this.state.nokia} {this.props.phone}.
        <label>
          Your Model:
          <input></input>
        </label>
        <Goodbye
          world={this.props.world}
          numbers={this.props.a}
          ob={this.props.o}
        />
      </div>
    );
  }
}

export default HelloWorld;
