// 项目的根组件

import { useRef } from "react";

function App() {
  const showDom = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };
  const inputRef = useRef(null);

  return (
    <div className="App">
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default App;
