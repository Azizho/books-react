import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SearchItemsType, SearchResultType } from './getBooksTypes';

const KEY = import.meta.env.VITE_API_KEY;

export const getBooks = createApi({
	reducerPath: 'GetDataApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
	}),

	endpoints: builds => ({
		getBooks: builds.query<SearchResultType, string>({
			query: search => `?q=${search}&key=${KEY}`,
		}),
		getBooksById: builds.query<SearchItemsType, string>({
			query: id => `${id}?key=${KEY}`,
		}),
	}),
});

export const { useGetBooksQuery, useGetBooksByIdQuery } = getBooks;
