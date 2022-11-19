import React from 'react';
import { render } from '@testing-library/react';
import Title from "./index";

test('renders Title', () => {
  const { getByText } = render(<Title title={'Wiki Words Counter'}/>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/Wiki Words Counter/i)).toBeInTheDocument();
});
