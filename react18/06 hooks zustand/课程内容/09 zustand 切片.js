import { useEffect } from "react";
import { create } from "zustand";

const URL = "http://geek.itheima.net/v1_0/channels";

// 创建counter相关切片
const createCounterStore = (set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  };
};

// 创建channel相关切片
const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonData = await res.json();
      set({ channelList: jsonData.data.channels });
    },
  };
};

// 组合切片
const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createChannelStore(...a),
}));

function App() {
  const { count, inc, channelList, fetchGetList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, []);
  return (
    <>
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
