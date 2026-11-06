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
    addToDo: (state, { payload }) => {
      state.toDo.push(payload)
    },
    deleteToDo: (state, { payload }) => {
      state.toDo = state.toDo.filter(t => t.id !== payload)
    },
    completeToDo: (state, { payload: { id, isCompleted } }) => {
      state.toDo = state.toDo.map(t =>
        t.id === id ? { ...t, isCompleted } : t
      )
    }
  }
})

const { reducer, actions } = toDoSlice

export const { deleteToDo, completeToDo, addToDo } = actions
export default reducer
