import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MouseEvents from './mouse-events';
import 'element-internals-polyfill';

test('renders MouseEvents component', () => {
  const wrapper = render(<MouseEvents />);
  expect(wrapper).toBeTruthy();
});