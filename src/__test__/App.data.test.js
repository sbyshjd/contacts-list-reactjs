import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import axios from 'axios';


import {fakeInfoForTesting} from '../basicVariables';

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


jest.mock('axios')

test("get the contact person info from api", async () => {

  axios.get.mockResolvedValue({
    data:{results:[fakeInfoForTesting]}
  })
  
  await act(async () => {
    render(<App />, container);
  });
  expect(container.textContent).toContain(fakeInfoForTesting.name.last)
  
});
