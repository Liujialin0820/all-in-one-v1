import type { ChannelItem } from "@/apis/list";
import { useEffect, useState } from "react";
import { fetchChannelAPI } from "@/apis/list";

function useTabs() {
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  useEffect(() => {
    async function getChannels() {
      try {
        const { data } = await fetchChannelAPI();
        setChannels(data.data.channels);
      } catch (error) {
        throw new Error("fetch channels error");
      }
    }
    getChannels();
  }, []);

  return {
    channels,
  };
}

export { useTabs };
