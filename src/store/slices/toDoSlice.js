import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  toDo: [
    { task: 'buy products', id: uuidv4() },
    { task: 'wash clothes', id: uuidv4() },
    { task: 'watch a video from Freshcode', id: uuidv4() }
  ]
}

const toDoSlice = createSlice({
  initialState,
  name: 'toDo',
  reducers: {
    // addToDo:
    // deleteToDo:
    // completeToDo:
  }
})

const { reducer, actions } = toDoSlice

// export {}=actions;
export default reducer
