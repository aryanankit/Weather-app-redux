import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherState {
  weatherData: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather', async (city: string) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_KEY}/`);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred with your request';
      });
  },
});

export default weatherSlice.reducer;