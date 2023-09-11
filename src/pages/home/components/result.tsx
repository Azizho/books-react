import { useAppSelector } from '@/hooks/state-selector'
import { useGetBooksQuery } from '@/query/getBooks'
import { Container, Skeleton, Stack, Typography } from '@mui/material'

export const ResultComponent = () => {
	const { isSearching, value } = useAppSelector(state => state.searchValueSlice)
	const { data, isError, isFetching, isLoading } = useGetBooksQuery(isSearching ? value : '',)

	if (isLoading || isFetching) {
		return (
			<Container sx={{ paddingBottom: "10px" }}>
				<Typography variant='h3' textAlign={"center"}>
					Загрузка...
				</Typography>
				<Skeleton variant='text' />
			</Container>
		)
	}

	if (!isSearching || isError) {
		return (
			<Container>
				<Stack pb={"10px"}>
					<Typography variant='h3' textAlign={"center"}>
						Чтобы найти кингу нужно ввести запрос
					</Typography>
				</Stack>
			</Container>
		)
	}
	return (
		<Container>
			<Stack pb={"10px"}>
				<Typography variant='h5' textAlign={"center"}>
					Results: {data?.totalItems}
				</Typography>
			</Stack>
		</Container>
	)
}
