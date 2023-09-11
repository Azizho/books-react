import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookLink = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 6px;
	max-width: 420px;
	padding: 30px 40px;
	text-decoration: none;
	color: #000;
	background-color: #e0e0e0;
	max-height: 420px;
`;
