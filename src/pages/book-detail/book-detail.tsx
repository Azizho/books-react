import { useGetBooksByIdQuery } from '@/query/getBooks'
import { Container, Skeleton, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { CustomImg } from './styles'
import { useEffect, useRef } from 'react'

// тут есть баг то что показывает место search это можно исправить, но мне времени не хватило
export const BookDetail = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetBooksByIdQuery(id ? id : ' ')
  const htmlRef = useRef(null)

  useEffect(() => {
  if (htmlRef.current && !isLoading) {
    const description = data?.volumeInfo.description || ''
    htmlRef.current.innerHTML = description
  }
}, [htmlRef, data, isLoading])

  if (isLoading) {
    return <Container>
      <Stack pt={"50px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack display={"block"} >
          <Skeleton width={128} height={118} />
        </Stack>
        <Stack maxWidth={"700px"}>
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' width={400} />
        </Stack>
      </Stack>
    </Container>
  }
  return (
    <Container>
      <Stack pt={"50px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack display={"block"} >
          <CustomImg src={data?.volumeInfo.imageLinks.thumbnail} alt={data?.volumeInfo.authors[0]} />
        </Stack>
        <Stack maxWidth={"700px"}>
          <h1>{data?.volumeInfo.title}</h1>
          <h2>{data?.volumeInfo.authors?.map((item) => item).join(", ")}</h2>
          <div ref={htmlRef}></div>
        </Stack>
      </Stack>
    </Container>
  )
}
