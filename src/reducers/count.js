import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  num: 0
}

// Sliceを生成する
const slice = createSlice({
  // name
  name: 'count',
  // 初期state
  initialState,
  reducers: {
    // Action Creatorの関数
    increment: (state, action) => {
      console.log(state)
      // state.num = 1
    },
    decrement: state => state.num -= 1
  }
})

// Action Creatorsをエクスポートする
export const { increment, decrement } = slice.actions

// Reducerをエクスポートする
export default slice.reducer
