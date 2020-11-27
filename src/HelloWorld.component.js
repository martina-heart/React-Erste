import React from "react";

import Goodbye from "./GoodBye.component";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iphone: "iphone",
      huawei: "Huawei",
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ iphone: "iphone12Pro" });
  }

  onClickHandler() {
    this.props.getHuawei(this.state.huawei);
  }

  render() {
    return (
      <div>
        Almost everyone has a Smart{this.props.phone}. Some use{" "}
        {this.state.iphone}, some use {this.props.samsung}, Or some use ...{" "}
        <button onClick={this.onClickHandler}>which brand</button> ?
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
