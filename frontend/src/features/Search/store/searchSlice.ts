import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

// State Form and Initial State
export interface CatalogState {
  searchString: string;
}

const initialState: CatalogState = {
  searchString: '',
};

// Slice Configuration

export const searchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

// Actions and Selectors Declaration

export const { setSearchString } = searchSlice.actions;
export const selectSearchString = (state: RootState) => state.search.searchString;

// Slice Exports

export default searchSlice.reducer;
