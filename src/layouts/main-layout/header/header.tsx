import { Typography } from '@mui/material'
import { HeaderBackgroundBox, HeaderContainer } from './styles'
import { FormComponent } from './components/form-component'

export const Header = () => {
  return (
    <HeaderBackgroundBox>
      <HeaderContainer>
        <Typography variant={'h1'} textAlign={"center"} pb={"8px"}>
          Search for books
        </Typography>
        <FormComponent />
      </HeaderContainer>
    </HeaderBackgroundBox>
  )
}
