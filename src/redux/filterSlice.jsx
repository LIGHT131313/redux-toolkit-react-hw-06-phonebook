import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(s, a) {
      return a.payload;
    },
  },
});

export const { filterContact } = slice.actions;
export const filterReducer = slice.reducer;
