import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
import {cleanup, fireEvent, render, wait} from '@testing-library/react'
import { act } from "react-dom/test-utils";
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