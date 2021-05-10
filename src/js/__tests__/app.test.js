import demo, { unusedVariable } from '../app';

test('testing the function demo', () => {
	const expected = 'variable';
	const received = demo(unusedVariable);
	expect(received).toBe(expected);
});