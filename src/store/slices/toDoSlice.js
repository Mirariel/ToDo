import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const initialState = {
  toDos: [],
  isFetching: false,
  error: null
}

export const getTaskThunk = createAsyncThunk(
  'toDo/getToDo',
  async (payload, thunkAPI) => {
    const { data } = await axiosInstance.get('/todos?_limit=8')
    return data
  }
)

const toDoSlice = createSlice({
  initialState,
  name: 'toDo',
  reducers: {
    addToDo: (state, { payload }) => {
      state.toDos.push(payload)
    },
    deleteToDo: (state, { payload }) => {
      state.toDos = state.toDo.filter(t => t.id !== payload)
    },
    completeToDo: (state, { payload: { id, completed } }) => {
      state.toDos = state.toDos.map(t =>
        t.id === id ? { ...t, completed } : t
      )
    }
  },
  extraReducers: builder => {
    builder.addCase(getTaskThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(getTaskThunk.fulfilled, (state, { payload }) => {
      state.toDos = payload
      state.isFetching = false
    })
    builder.addCase(getTaskThunk.rejected, (state, { payload }) => {
      state.isFetching = false
      state.error = payload
    })
  }
})

const { reducer, actions } = toDoSlice

export const { deleteToDo, completeToDo, addToDo } = actions
export default reducer
