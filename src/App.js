// import GoodBye from "./GoodBye.component";
import HelloWorld from "./HelloWorld.component";

function App() {
  const phone = "phone";
  const iphone = "Iphone";
  const samsung = "Samsung";
  const a = [1, 2, 3];
  const o = {
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <HelloWorld phone={phone} iphone={iphone} samsung={samsung} a={a} o={o} />
    </>
  );
}

export default App;
