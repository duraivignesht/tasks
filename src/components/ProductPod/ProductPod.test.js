import React from "react";
import { render, screen, waitForElement } from "@testing-library/react";
import { ProductPod } from "./ProductPod";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter as Router} from 'react-router-dom';
test('Checking Product', () => {
  const product =  {
  id:1,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
  price: 55,
  description: 'Drill',
  brand: 'DeWalt'
}

  render(<Router><ProductPod product={product} /></Router>);
  const getBrand = screen.getByTestId('brand-1');
  expect(getBrand).toBeInTheDocument();
  expect(getBrand).toHaveTextContent('DeWalt');

  const getDescription = screen.getByTestId('desc-1');
  expect(getDescription).toBeInTheDocument();
  expect(getDescription).toHaveTextContent('Drill');
})


