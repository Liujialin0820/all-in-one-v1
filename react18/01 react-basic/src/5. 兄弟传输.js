import { useState } from "react";

function A({ onGetAName }) {
  const name = "this is A";
  return (
    <div>
      this is A,
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  );
}

function B({ name }) {
  return (
    <div>
      this is B, {name}
    </div>
  );
}

function App() {
  const [Aname, setAName] = useState("");
  const getAName = (name) => {
    console.log(name);
    setAName(name);
  };
  return (
    <div>
      this is App,
      <A onGetAName={getAName}></A>
      <B name={Aname}></B>
    </div>
  );
}

export default App;
