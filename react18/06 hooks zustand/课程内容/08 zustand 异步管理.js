// 1. 创建store
import { useEffect } from "react";
import { create } from "zustand";

const URL = "http://geek.itheima.net/v1_0/channels";

const useStore = create((set) => {
  return {
    channleList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(res);
      console.log(jsonRes);
      set({
        channleList: jsonRes.data.channels,
      });
    },
  };
});

// 2. 绑定store到组件

function App() {
  const { fetchGetList, channleList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, []);
  return (
    <>
      <ul>
        {channleList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
