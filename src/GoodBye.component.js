import React from "react";

function GoodBye(props) {
  return (
    <>
      <div>Goodbye world {props.numbers[0]}</div>
      <div>Goodbye world {props.ob["b"]}</div>
    </>
  );
}

export default GoodBye;
