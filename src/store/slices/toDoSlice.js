import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  toDo: [
    { task: 'buy products', id: uuidv4(), isCompleted: false },
    { task: 'wash clothes', id: uuidv4(), isCompleted: false },
    { task: 'watch a video from Freshcode', id: uuidv4(), isCompleted: false }
  ]
}

const toDoSlice = createSlice({
  initialState,
  name: 'toDo',
  reducers: {
    // addToDo:
    deleteToDo: (state, { payload }) => {
      state.toDo = state.toDo.filter(t => t.id !== payload)
    }
    // completeToDo:
  }
})

const { reducer, actions } = toDoSlice

export const { deleteToDo } = actions
export default reducer
