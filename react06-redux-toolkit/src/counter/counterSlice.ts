import { createSlice } from "@reduxjs/toolkit"

interface CounterState{
    value: number;
}
const initialState:CounterState = {value:0}

const counterSlice = createSlice({
  name: 'myCounter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
        state.value += 1
    },
    desrement: (state) => {
        state.value -= 1
    },
    reset: (state) => {
        state.value = 1
    },

  },
})

// 액션 함수 내보내기
export const {increment,desrement,reset} = counterSlice.actions

export default counterSlice.reducer