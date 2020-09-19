import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserCard from '../components/UserCard';

import { fakeInfoForTesting } from '../basicVariables';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render with or without props',() => {
    act(() => {
        render(<UserCard user={fakeInfoForTesting}/>, container)
    })
    expect(container.textContent).toContain('e mail')
    expect(container.textContent).toContain('phone')
    expect(container.textContent).toContain('street')
    expect(container.textContent).toContain('state')
    expect(container.textContent).toContain('postcode')
    
})