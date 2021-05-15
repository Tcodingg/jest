import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

it('searchRenderCheck', () => {
	const { queryByTitle } = render(<Search />);
	const input = queryByTitle('dummysearch');
	expect(input).toBeTruthy();
});

describe('ChangeInput', () => {
	const { queryByTitle } = render(<Search />);
	const input = queryByTitle('dummysearch');
	fireEvent.change(input, { target: { value: 'testValue' } });
	expect(input.value).toBe('testValue');
});
