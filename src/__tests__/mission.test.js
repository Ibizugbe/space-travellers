import React from "react";
import Renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Mission from "../components/pages/Mission";

it("renders correctly", () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Mission />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  ).toJSON();
  expect(tree).toMatchSnapshot(`
<div
  className="container-fluid px-5"
>
  <table
    className="table table-hover table-striped table-responsive"
  >
    <thead>
      <tr>
        <th
          scope="col"
        >
          Missions
        </th>
        <th
          scope="col"
        >
          Description
        </th>
        <th
          scope="col"
        >
          Status
        </th>
      </tr>
    </thead>
    <tbody />
  </table>
</div>
`);
});
