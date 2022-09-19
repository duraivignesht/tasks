import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartButton } from "./CartButton";
import { context } from '../../App';


test('Checking Cart Header', () => {
  const {getByText} = render(<CartButton />)
  expect(getByText('Add to cart')).toBeInTheDocument()
})


