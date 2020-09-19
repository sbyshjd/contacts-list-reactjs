import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

import { alphabet } from '../basicVariables';

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

it('render the basic file without fetching data', () => {
    act(() => {
        render(<App/>, container)
    })
    expect(container.textContent).toContain('Contacts List')
    for(let letter of alphabet ) {
        expect(container.textContent).toContain(letter)
    }
})