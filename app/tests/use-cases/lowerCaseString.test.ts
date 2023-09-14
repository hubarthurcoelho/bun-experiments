import {
  describe,
  expect,
  it
} from 'bun:test';
import { lowerCaseString } from '../../use-cases/lowerCaseString';

describe('Test lowerCaseString', () => {
  it('should print a string', () => {
    const SUT = lowerCaseString;
    const input = 'HELLO WORLD!';
    const expected = 'hello world!'

    const actual = SUT(input);

    expect(actual).toBe(expected);
  })
});
