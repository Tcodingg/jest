import React from 'react';

import Search from './search/Search';
import Button from './button/Button';

export default function App() {
	return (
		<div style={style}>
			<Button />
			<Search />
		</div>
	);
}

const style = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};
