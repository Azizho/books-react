import React from 'react';

export const useDebounce = (value: string, delay = 500) => {
	const [debounce, setDebounceValue] = React.useState(value);

	React.useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [delay, value]);

	return debounce;
};
