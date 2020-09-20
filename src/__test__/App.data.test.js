import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import axios from "axios";

import { fakeInfoForTesting } from "../basicVariables";

const root = document.createElement("div");
document.body.appendChild(root);

afterEach(cleanup);

jest.mock("axios");

it("get the contact person info from api", async () => {
  axios.get.mockResolvedValue({
    data: { results: [fakeInfoForTesting] },
  });

  await act(async () => {
    render(<App />, root);
  });
  expect(root.textContent).toContain(fakeInfoForTesting.name.last);
});
