// dashboard.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Dashboard from "./dashboard";

let container = null;
const data = [
  {
    description: "Task 1",
    estimation: 5,
    status: "done"
  },
  {
    description: "Task 2",
    estimation: 7,
    status: "on going"
  },
  {
    description: "Task 3",
    estimation: 2,
    status: "not started"
  }
];

beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza con o sin nombre", () => {
  act(() => {
    render(<Dashboard tasks={data} />, container);
  });
  expect(container.textContent).toBe("Task 1 5Task 2 7Task 3 2");
});
