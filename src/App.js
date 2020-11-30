// import GoodBye from "./GoodBye.component";
import HelloWorld from "./HelloWorld.component";

function App() {
  //Data
  const phone = "phone";
  const iphone = "Iphone";
  const samsung = "Samsung";
  const a = [1, 2, 3];
  const o = {
    a: 1,
    b: 2,
    c: 3,
  };

  function getHuawei(huawei) {
    console.log(huawei + " phone ");
  }
  function getNokia(nokia) {
    console.log(nokia + phone);
  }

  return (
    //Mounting
    <>
      <HelloWorld
        phone={phone}
        iphone={iphone}
        samsung={samsung}
        a={a}
        o={o}
        getHuawei={getHuawei}
        getNokia={getNokia}
      />
    </>
  );
}

export default App;
