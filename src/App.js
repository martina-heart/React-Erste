import HelloWorld from "./HelloWorld.component";
import GoodBye from "./GoodBye.component";

function App() {
  let helloWorld = "Hello Martina";
  return (
    <>
      <div>{helloWorld}</div>
      <HelloWorld />
      <GoodBye />
    </>
  );
}

export default App;
