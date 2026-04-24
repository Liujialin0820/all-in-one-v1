import { useDispatch, useSelector } from "react-redux";
import { addToNum, decrement, increment } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const dispatch = useDispatch();

  // 同步
  const { count } = useSelector((state) => state.counter);

  // 异步
  const { channelList } = useSelector((state) => state.channel);
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  return (
    <div className="App">
      {/* 同步 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>Add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>Add to 20</button>

      {/* 异步 */}
      <ul>
        {channelList.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
