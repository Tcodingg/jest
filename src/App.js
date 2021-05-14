import React from 'react';

export default function App() {
	return (
		<div style={style}>
			<button>Press Here</button>
			<input type='text' />
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
