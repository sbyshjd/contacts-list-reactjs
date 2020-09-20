import React from 'react';
import {cleanup, fireEvent, render, wait} from '@testing-library/react'
import UserCard from '../components/UserCard';

import { fakeInfoForTesting } from '../basicVariables';


afterEach(cleanup);

it('render with or without props',() => {
    const { getByText } = render(<UserCard user={ fakeInfoForTesting }/>)
    getByText('e mail')
    getByText('phone')
    getByText('street')
    getByText('state')
    getByText('postcode')
 
    
})