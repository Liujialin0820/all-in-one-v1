// useCallBack

import { memo, useCallback, useState } from "react";

const MemoSon = memo(function Son() {
  console.log("Son组件渲染了");
  return <div>this is son</div>;
});

function App() {
  const [, forceUpate] = useState();
  console.log("父组件重新渲染了");
  const onGetSonMessage = useCallback((message) => {
    console.log(message);
  }, []);

  return (
    <div>
      {/* 本来的时候子组件是不渲染的 */}
      <MemoSon />
      {/* 如果传入了函数，子组件就可以开始渲染 */}
      {/* 这个情况下，如果on get message是use callback, 那就不担心了 */}
      <MemoSon onGetSonMessage={onGetSonMessage}/>
      <button onClick={() => forceUpate(Math.random())}>update</button>
    </div>
  );
}

export default App;
