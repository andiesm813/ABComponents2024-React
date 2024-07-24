import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import AllComponents from './all-components';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders AllComponents component', () => {
  const wrapper = render(<AllComponents />);
  expect(wrapper).toBeTruthy();
});