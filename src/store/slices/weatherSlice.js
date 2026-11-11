import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.open-meteo.com/'
})

const initialState = {
  weather: null,
  isFetching: false,
  error: null
}

export const getWeatherThunk = createAsyncThunk(
  'weather/getWeather',
  async (payload, thunkAPI) => {
    const { data } = await axiosInstance.get(
      '/v1/forecast?latitude=50.061428&longitude=19.936585&current=temperature_2m,wind_speed_10m'
    )
    console.log('data :>> ', data)
    return data
  }
)

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeatherThunk.pending, state => {
      state.isFetching = true
      state.error = null
    })
    builder.addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
      state.weather = payload
      state.isFetching = false
    })
    builder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false
      state.error = payload
    })
  }
})

const { reducer, actions } = weatherSlice

export default reducer
