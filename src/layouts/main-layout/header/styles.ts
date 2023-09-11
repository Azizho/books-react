import styled from 'styled-components';
import { HeaderBG } from '@/assets/img';
import { Container } from '@mui/material';

export const HeaderBackgroundBox = styled.div`
	background-image: url(${HeaderBG});
	background-repeat: no-repeat;
	background-size: cover;
`;

export const HeaderContainer = styled(Container)`
	padding-top: 15px;
	padding-bottom: 10px;
`;
