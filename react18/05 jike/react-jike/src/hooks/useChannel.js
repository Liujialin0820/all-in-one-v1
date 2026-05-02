import { getChannelAPI } from "@/apis/article";
import { useEffect, useState } from "react";

function useChannel() {
  // 1. 获取数据

  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };

    getChannelList();
  }, []);
  // 2. return 数据
  return { channelList };
}

// 导出给别的模块用
export { useChannel };
