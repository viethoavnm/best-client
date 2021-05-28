import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertTranslations, getSafeValue } from 'utils';
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
      let newsData = action.payload;
      if (Array.isArray(newsData)) {
        newsData.forEach(item => {
          convertTranslations(item);
        });
      }
      state.newsData = newsData;
    },
    [fetNewEvent.fulfilled]: (state, action) => {
      let eventData = action.payload;
      if (Array.isArray(eventData)) {
        eventData.forEach(item => {
          convertTranslations(item);
        });
      }
      state.eventData = eventData;
    }
  }
});

// Action creators are generated for each case reducer function
// export const {} = rightBarSlice.actions;

export default rightBarSlice.reducer;
