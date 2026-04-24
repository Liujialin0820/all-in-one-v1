import { useState } from "react";

function Son({ onGetSonMsg }) {
  const sonMsg = "Son";
  return (
    <div>
      this is son
      <button onClick={() => onGetSonMsg(sonMsg)}>send message </button>
    </div>
  );
}

function App() {
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div>
      this is father, {msg}.
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}

export default App;
