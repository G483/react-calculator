/* eslint no-undef: 0 */

import Operations from '../Operations';

test('adds 1 + 2 to equal 3', () => {
    expect(Operations.add(1, 2)).toBe(3);
});

test('subtracts 4 - 2 to equal 2', () => {
    expect(Operations.subtract(4, 2)).toBe(2);
});

test('adds string 1 to integer 2 to equal 3', () => {
    expect(Operations.add("1", 2)).toBe(3);
});

test('subtracts integer 3 from string 6 to equal 3', () => {
    expect(Operations.subtract("6", 3)).toBe(3);
});

test('adds decimal 1.34 + 5 to equal 6.34', () => {
    expect(Operations.add(1.34, 5)).toBe(6.34);
});

test('adds decimal as string 1.34 + 5 to equal 6.34', () => {
    expect(Operations.add("1.34", 5)).toBe(6.34);
});

test('adds decimal 1.34 + 3.2 to equal 4.54', () => {
    expect(Operations.add(1.34, 3.2)).toBe(4.54);
});