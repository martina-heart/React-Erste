import React from "react";

import Goodbye from "./GoodBye.component";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iphone: "iphone",
    };
  }

  render() {
    return (
      <div>
        Almost everyone has a Smart{this.props.phone}. Some use{" "}
        {this.state.iphone}, some use {this.props.samsung}.
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
