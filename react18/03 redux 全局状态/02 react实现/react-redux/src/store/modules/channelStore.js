// 异步操作代码模板,

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// 创建store的写法不变
const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;

// 封装异步请求部分
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("https://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};

export { fetchChannelList };

const reducer = channelStore.reducer;

export default reducer;
