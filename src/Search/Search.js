import React, { useState } from 'react';

export default function Search() {
	const [inputValue, setInputValue] = useState();
	return (
		<input
			type='text'
			title='dummysearch'
			onChange={(e) => setInputValue(e.target.value)}
		/>
	);
}
