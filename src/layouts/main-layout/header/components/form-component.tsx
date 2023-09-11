import { BsSearch } from '@/assets/icons'
import { useDebounce } from '@/hooks/debounce-hook'
import { useAppDispatch } from '@/hooks/state-selector'
import { setIsSearching, setSearchValue } from '@/slices/search-value'
import { Box, TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

export const FormComponent = () => {
	const [startValue, setStartValue] = useState(' ')
	const dispatch = useAppDispatch()
	const debounceValue = useDebounce(startValue)
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setStartValue(e.target.value)
		if (e.target.value === ' ') {

			dispatch(setIsSearching(false))
			return
		}
		dispatch(setIsSearching(true))
	}
	useEffect(() => {
		dispatch(setSearchValue(debounceValue))
	}, [debounceValue, dispatch])
	return (
		<Box display={"flex"} justifyContent={"center"}>
			<TextField onChange={changeHandler} type='text' value={startValue}
				variant="outlined"
				sx={{ backgroundColor: '#19ebc1', borderRadius: '5px' }}
				InputProps={{
					startAdornment: <BsSearch style={{
						marginRight: '8px',
					}} />,
				}}
			/>
		</Box>
	)
}
