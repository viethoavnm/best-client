import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertTranslations, getSafeValue } from 'utils';
import { getArticle } from '../services/articles';
import { getEvent, getEventByYear } from '../services/event';

export const fetchNewArticle = createAsyncThunk(
  'righBar/fetchNewArticle',
  async () => {
    const params = {
      page: 1,
      limit: 3,
      publishBefore: new Date().toISOString(),
      isPublish: 1
    };
    const res = await getArticle(params);
    const data = getSafeValue(res, 'data.results', []);
    return data;
  }
);

export const fetNewEvent = createAsyncThunk('righBar/fetNewEvent', async () => {
  const params = {
    page: 1,
    limit: 3,
    isPublish: 1,
    afterAt: new Date().toISOString()
  };
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
        state.eventData = eventData
          .sort((b, a) => {
            let timeA = new Date(a?.startDate);
            let timeB = new Date(b?.startDate);
            if (isNaN(timeA)) return 1;
            if (isNaN(timeB)) return -1;
            return timeB - timeA;
          })
          .slice(0, 3);
      }
    }
  }
});

// Action creators are generated for each case reducer function
// export const {} = rightBarSlice.actions;

export default rightBarSlice.reducer;
