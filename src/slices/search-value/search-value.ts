import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: ' ',
	isSearching: false,
};

export const searchValueSlice = createSlice({
	name: 'searchValue',
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			if (action.payload) {
				state.value = action.payload;
			} else {
				state.value = ' ';
			}
		},
		setIsSearching: (state, action) => {
			state.isSearching = action.payload;
		},
	},
});

export const { setSearchValue, setIsSearching } = searchValueSlice.actions;

export default searchValueSlice.reducer;
