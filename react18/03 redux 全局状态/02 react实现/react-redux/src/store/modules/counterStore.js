// 这是同步代码 channel是异步代码

import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始状态
  initialState: {
    count: 0,
  },
  // reducers 修改数据的方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload;
    },
  },
});

// 结构出action creater 函数

const { increment, decrement, addToNum } = counterStore.actions;

// 获取reducer
const reducer = counterStore.reducer;

// 按需导出 导出actionCreatro
export { increment, decrement, addToNum };

// 默认导出reducer
export default reducer;
