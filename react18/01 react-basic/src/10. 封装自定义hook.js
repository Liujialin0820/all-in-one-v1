// 自定义useXXX (hook)
import { useState } from "react";

function useToggle() {
  // 可复用的逻辑代码
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);

  // 哪些状态和回调函数需要在其他组件中使用 return
  return {
    value,
    toggle,
  };
}

function App() {
  const { value, toggle } = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
