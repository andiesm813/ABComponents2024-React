import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import AvatarsImages from './avatars-images';
import 'element-internals-polyfill';

test('renders AvatarsImages component', () => {
  const wrapper = render(<AvatarsImages />);
  expect(wrapper).toBeTruthy();
});