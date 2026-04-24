// 项目的根组件

import { useState } from "react";

function App() {
  //1. 调用 usestate 添加状态变量
  const [count, setCount] = useState(0);

  //2. 点击事件回调
  const handleClick = () => {
    //3. 必须用setCount修改
    //4. 重新用新的count渲染ui
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
