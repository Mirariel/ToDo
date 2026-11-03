import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './slices/toDoSlice'

const store = configureStore({
  reducer: {
    toDoList: toDoReducer
  }
})

export default store
