import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Radiogroup from './radiogroup';
import 'element-internals-polyfill';

test('renders Radiogroup component', () => {
  const wrapper = render(<Radiogroup />);
  expect(wrapper).toBeTruthy();
});