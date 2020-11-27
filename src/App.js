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

  return (
    <>
      <HelloWorld
        phone={phone}
        iphone={iphone}
        samsung={samsung}
        a={a}
        o={o}
        getHuawei={getHuawei}
      />
    </>
  );
}

export default App;
