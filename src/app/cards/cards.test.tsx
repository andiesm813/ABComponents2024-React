import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Cards from './cards';
import 'element-internals-polyfill';

test('renders Cards component', () => {
  const wrapper = render(<Cards />);
  expect(wrapper).toBeTruthy();
});