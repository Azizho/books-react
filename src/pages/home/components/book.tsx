import { FC } from 'react'
import { BookLink } from '../styles'
import { BookCardProps } from '../types'
import { Skeleton, Stack, Typography } from '@mui/material'



export const BookCard: FC<BookCardProps> = ({ data, isLoading }) => {
	console.log(data, isLoading)
	if (isLoading) {
		return (
			<Stack padding={"10px"}>
				<Skeleton variant='rectangular' width={128} height={201} />
			</Stack>
		)
	}
	const categories = data?.volumeInfo?.categories?.map((item) => {
		return item
	}).join(", ")
	const authors = data?.volumeInfo?.authors?.map((item) => {
		return item
	}).join(", ")
	return (
		<BookLink to={`/${data?.id}`}>
			<img src={data?.volumeInfo?.imageLinks?.smallThumbnail} alt={data?.id} />

			<Typography variant='body2'>{categories}</Typography>
			<Typography variant='h6'>{data?.volumeInfo?.title}</Typography>
			<Typography variant='body1'>{authors}</Typography>
		</BookLink>
	)
}
