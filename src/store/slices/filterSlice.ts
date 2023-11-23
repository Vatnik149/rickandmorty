// filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  characterSpeciesSort: { name: string; sortProperty: string };
  characterGenderSort: { name: string; sortProperty: string };
  characterStatusSort: { name: string; sortProperty: string };
  locationTypeSort: { name: string; sortProperty: string };
  locationDimensionSort: { name: string; sortProperty: string };
}

const initialState: FilterState = {
  characterSpeciesSort: { name: '', sortProperty: '' },
  characterGenderSort: { name: '', sortProperty: '' },
  characterStatusSort: { name: '', sortProperty: '' },
  locationTypeSort: { name: '', sortProperty: '' },
  locationDimensionSort: { name: '', sortProperty: '' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCharacterSpeciesSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
      state.characterSpeciesSort = action.payload;
    },
    setCharacterGenderSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
      state.characterGenderSort = action.payload;
    },
    setCharacterStatusSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
      state.characterStatusSort = action.payload;
    },
    setLocationTypeSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
      state.locationTypeSort = action.payload;
    },
    setLocationDimensionSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
      state.locationDimensionSort = action.payload;
    },
  },
});
export const { setLocationDimensionSort } = filterSlice.actions;
export const { setLocationTypeSort } = filterSlice.actions;
export const { setCharacterStatusSort } = filterSlice.actions;
export const { setCharacterGenderSort } = filterSlice.actions;
export const { setCharacterSpeciesSort } = filterSlice.actions;
export default filterSlice.reducer;
