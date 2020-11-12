import React from "react";

import Goodbye from "./GoodBye.component";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Smart {this.props.phone}
        <Goodbye world={this.props.world} />
      </div>
    );
  }
}

export default HelloWorld;
