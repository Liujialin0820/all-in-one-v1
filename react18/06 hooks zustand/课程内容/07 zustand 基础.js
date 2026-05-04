// 1. 创建store
import { create } from "zustand";

const useStore = create((set) => {
  return {
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    des: () => set({ count: 1 }),
  };
});

// 2. 绑定store到组件

function App() {
  const { count, inc, des } = useStore();
  return (
    <>
      <button onClick={inc}>{count}</button>
      <button onClick={des}>des</button>
    </>
  );
}

export default App;
