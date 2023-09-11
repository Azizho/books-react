import { useGetBooksByIdQuery } from '@/query/getBooks'
import { Container, Stack } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// тут есть баг то что показывает место search это можно исправить, но мне времени не хватило
export const BookDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetBooksByIdQuery(id ? id : ' ')
  if (isLoading) {
    return <div style={{ textAlign: 'center' }}><h1>loading...</h1></div>
  }
  return (
    <Container>
      <Stack pt={"50px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack>
          <img src={data?.volumeInfo.imageLinks.thumbnail} alt={data?.volumeInfo.authors[0]} />
        </Stack>
      </Stack>
    </Container>
  )
}
