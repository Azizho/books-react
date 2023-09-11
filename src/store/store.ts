import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchValueSlice from '@/slices/search-value';
import { getBooks } from '@/query/getBooks';

const reducer = combineReducers({
	[getBooks.reducerPath]: getBooks.reducer,
	searchValueSlice,
});

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(getBooks.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
