import { Container, Grid, Typography } from '@mui/material'
import { BookCard } from './book'
import { emptyArrayForLoad } from '@/config/empty'
import { SearchResultType } from '@/query/getBooksTypes'
import { FC } from 'react'

type BooksMapProps = {
	data?: SearchResultType | undefined
	isLoading: boolean
	isFetching: boolean
	isError: boolean
	isSuccess: boolean
}

export const BooksMap: FC<BooksMapProps> = ({ data, isLoading, isFetching, isError, isSuccess }) => {
	if (isLoading || isFetching) {
		return (
			<Container>
				<Grid container rowSpacing={'45.11px'} columnSpacing={'24px'}>
					{emptyArrayForLoad?.map((item) => (
						<Grid item xl={3} key={item.id}>
							<BookCard isLoading={true} key={item.id} />
						</Grid>
					))}
				</Grid>
			</Container>
		)
	}

	if (isError) {
		return (
			<Container>
				<h1>An error occurred while connecting to the server</h1>
			</Container>
		)
	}

	if (data?.items && data?.items.length <= 0 && isSuccess) {
		return (
			<Container>
				<Typography variant={'h1'}>Продукт не найден :(</Typography>
			</Container>
		)
	}
	return (
		<Container>
			<Grid container rowSpacing={'45.11px'} columnSpacing={'24px'}>
				{data?.items.map((item) => (
					<Grid item xl={3} key={item.id}>
						<BookCard key={item.id} data={item} isLoading={false} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
