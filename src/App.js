import HelloWorld from "./HelloWorld.component";

function App() {
  let helloWorld = "Hello Martina";

  return (
    <>
      <div>{helloWorld}</div>
      <HelloWorld phone="Phone" />
    </>
  );
}

export default App;
