import { useReducer } from "react";

// 1. 定义reducer函数 根据不同的action 返回不同的状态
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  // 2. 组建中调用useReducer（reducer,0 ）=>[state,dispatch]
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      this is app // 3. 调用 dispatch({}) 通知reducer 产生一个新的状态
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      {state}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
        100
      </button>
    </div>
  );
}

export default App;
