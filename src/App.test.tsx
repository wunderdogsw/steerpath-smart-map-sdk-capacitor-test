import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let container: HTMLDivElement;
  let root: ReactDOM.Root;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
  });

  afterEach(() => {
    if (container !== null) {
      document.body.removeChild(container);
    }
  });

  it("the title is visible", () => {
    act(() => {
      root.render(<App />);
    });
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
