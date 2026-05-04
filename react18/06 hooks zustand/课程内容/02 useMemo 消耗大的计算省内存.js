// useMemo
// 作用：在组件渲染时缓存计算的结果

import { useMemo, useState } from "react";

function factorialOf(n) {
  console.log("斐波那契函数执行了");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function App() {
  const [count1, setCount] = useState(0);

  // 计算斐波那契之和
  const sumByCount = useMemo(() => {
    return factorialOf(count1);
  }, [count1]);

  const [count2, setCount2] = useState(0);

  return (
    <>
      {sumByCount}
      <button onClick={() => setCount(count1 + 1)}>+count1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>+count2:{count2}</button>
    </>
  );
}

export default App;
