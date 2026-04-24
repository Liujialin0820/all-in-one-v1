import { useEffect, useState } from "react";

// 项目的根组件
const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      setList(jsonRes.data.channels);
    }
    getList();
  }, []);

  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
