import React from "react";

function GoodBye(props) {
  function onClickHandler() {
    console.log("You cliked on the div tag in the GoodBye component !");
    // this.props.getHuawei();
  }
  return (
    <>
      <div onClick={onClickHandler}>Goodbye world {props.numbers[0]}</div>
      <div>Goodbye world {props.ob["b"]}</div>
    </>
  );
}

export default GoodBye;
