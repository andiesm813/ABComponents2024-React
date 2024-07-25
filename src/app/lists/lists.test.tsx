import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Lists from './lists';
import 'element-internals-polyfill';

test('renders Lists component', () => {
  const wrapper = render(<Lists />);
  expect(wrapper).toBeTruthy();
});