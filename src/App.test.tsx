import React from 'react'
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { users } from "./mocks/handlers";

import App from "./App";

describe("first", () => {
  test("renders App", async () => {
    await act(() => render(<App />));
    const totalElements = screen.getAllByTestId("user-card").length;
    expect(totalElements).toEqual(users.length);
  });
});
