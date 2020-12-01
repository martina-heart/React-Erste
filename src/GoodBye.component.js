import React, { useState, useEffect } from "react";

function GoodBye(props) {
  /*when we use more declared properties who behave for one functionality.
  const [{ iphone, huawei }, usePhones] = useState({
    iphone: "iphone",
    huawei: "huawei",
  }); */
  /* Wen we use ES6 syntax
  const [ mobilePhones, useMobilePhones] = useState({
    iphone: "iphone",
    huawei: "huawei",
  });
  */
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter((counter: 3));
  }, [counter]);
  const [phone, setPhone] = useState("iphone");
  function onClickHandler() {
    console.log("You cliked on the div tag in the GoodBye component !");
    setPhone((phone = "samsung"));
    //ES6 syntax setMobilePhones ({...mobilePhones, huawei: "Huawei P40 pro"})
    this.props.getHuawei();
  }
  return (
    <>
      <div onClick={onClickHandler}>Goodbye world {props.numbers[0]}</div>
      <div>Goodbye world {props.ob["b"]}</div>
    </>
  );
}

export default GoodBye;
