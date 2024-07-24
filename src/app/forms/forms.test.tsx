import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Forms from './forms';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Forms component', () => {
  const wrapper = render(<Forms />);
  expect(wrapper).toBeTruthy();
});