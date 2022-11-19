import {setupStore} from "../../store/store";
import {renderWithProviders} from "../../tests/utils";
import {WordElement} from "./index";
import React from "react";


test('render WordElement', () => {
    const store = setupStore()
    const { container, getByText } = renderWithProviders(<WordElement word={'test'} rating={3}/>, {store})
    // @ts-ignore
    // eslint-disable-next-line testing-library/no-container
    expect(container.getElementsByClassName('Star').length).toBe(3)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/test/i)).toBeInTheDocument()
})