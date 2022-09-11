import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Users, { url } from "./Users";
afterEach(() => {
  axios.get.mockClear();
});
test("fetching data", async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          name: {
            first: "arun",
            last: "ma"
          }
        },
        {
          name: {
            first: "raj",
            last:"sunil"
          } 
        },
        {
          name: {
            first: "Sam",
            last:"sunil"
          } 
        }
      ]
    }
  });

  const { getAllByTestId, getByText } = render(<Users />);
  expect(getByText(/loading.../i)).toBeInTheDocument();

  const rowValues = await waitForElement(() =>
    getAllByTestId("row").map(row => row.textContent)
  );
  expect(rowValues).toEqual(["arun", "raj", "Sam"]);
  expect(axios.get).toHaveBeenCalledWith(url);
  expect(axios.get).toHaveBeenCalledTimes(1);
});
