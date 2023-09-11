import { createTheme } from '@mui/material';
import { COLORS } from '@/config/colors';

export const theme = createTheme({
	typography: {
		fontFamily: 'Noto Sans Osmanya',
		h1: {
			color: COLORS.grey[400],
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 392,
			md: 784,
			lg: 1248,
			xl: 1536,
		},
	},
});
