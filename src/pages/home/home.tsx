import { useAppSelector } from '@/hooks/state-selector'
import { useGetBooksQuery } from '@/query/getBooks'
import { BooksMap } from './components/booksMap'
import { ResultComponent } from './components/result'

export const Home = () => {
	const { value } = useAppSelector(state => state.searchValueSlice)
	const { data, isLoading, isError, isFetching, isSuccess } = useGetBooksQuery(value)
	if (isError) {
		return (
			<>
				<ResultComponent />
			</>
		)
	}
	return (
		<>
			<ResultComponent />
			<BooksMap data={data} isError={isError} isLoading={isLoading} isFetching={isFetching} isSuccess={isSuccess} />
		</>
	)
}
