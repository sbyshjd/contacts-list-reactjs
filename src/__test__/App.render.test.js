import React from "react";
import {cleanup, fireEvent, render, wait} from '@testing-library/react';
import App from "../App";

import { alphabet } from '../basicVariables';



afterEach(cleanup);

it('render the basic file without fetching data', () => {
    const { getByText } = render(<App/>)
    getByText('Contacts List')
    for(let letter of alphabet ) {
        getByText(letter)
    }
})