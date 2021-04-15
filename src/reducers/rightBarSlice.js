import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment';
import { getSafeValue } from 'utils';
import { getArticle } from '../services/articles';
import { getEvent } from '../services/event';

export const fetchNewArticle = createAsyncThunk(
  'righBar/fetchNewArticle',
  async () => {
    const params = { page: 1, limit: 3 };
    const res = await getArticle(params);
    const data = getSafeValue(res, 'data.results', []);
    return data;
  }
);

export const fetNewEvent = createAsyncThunk('righBar/fetNewEvent', async () => {
  const params = { page: 1, limit: 3 };
  const res = await getEvent(params);
  const data = getSafeValue(res, 'data.results', []);
  return data;
});

export const rightBarSlice = createSlice({
  name: 'rightBar',
  initialState: {
    newsData: [],
    eventData: []
  },
  reducers: {},
  extraReducers: {
    [fetchNewArticle.fulfilled]: (state, action) => {
      state.newsData = action.payload;
    },
    [fetNewEvent.fulfilled]: (state, action) => {
      state.eventData = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
// export const {} = rightBarSlice.actions;

export default rightBarSlice.reducer;
