import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from '../Redux/configureStore';
import Rockets from '../components/pages/Rockets';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={myStore}>
          <BrowserRouter>
            <Rockets />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<ul
  className="my-rocket-list"
/>
`);
});
