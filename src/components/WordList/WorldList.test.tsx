import React from 'react';
import WordList, {WordElement} from "./index";
import {renderWithProviders} from "../../tests/utils";
import {setupStore} from "../../store/store";

test('render WordList', () => {
    const store = setupStore()
    const { getByText } = renderWithProviders(<WordList/>, {store})
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/Word Rank List/i)).toBeInTheDocument()
})
