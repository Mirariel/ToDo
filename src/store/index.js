import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './slices/toDoSlice'
import weatherReducer from './slices/weatherSlice'

const store = configureStore({
  reducer: {
    toDoList: toDoReducer,
    currentWeather: weatherReducer
  }
})

export default store
