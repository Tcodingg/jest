import React, { useState } from 'react';

export default function Button() {
	const [clicked, setClicked] = useState('Clicked Here');

	return (
		<button onClick={() => setClicked('You Clicked')} title='dummyButton'>
			{clicked}
		</button>
	);
}
