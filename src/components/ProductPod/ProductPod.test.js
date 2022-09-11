import React from "react";
import { render, screen, waitForElement } from "@testing-library/react";
import { ProductPod } from "./ProductPod";
import "@testing-library/jest-dom/extend-expect";

test('Checking Product', async () => {
  const product =  {
          brand: 'DeWalt'
        };
 const { getAllByTestId } = render(<ProductPod product={product} />)
 console.log(data)
// expect(screen.getByText(data[0].brand)).toBeInTheDocument();
  const rowValues = await waitForElement(() =>
  getAllByTestId("row").map(row => row.textContent)
  ); 
  
  expect(rowValues).toEqual(["arun", "raj", "Sam"]);
  
 // expect(screen.getByTestId('branddata')).textContent('DeWalt') 


})


