import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Users, { url } from "./Users";

test("fetching data", async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          name: {
            first: "arun"
          }
        },
        {
          name: {
            first: "raj"
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
  expect(rowValues).toEqual(["arun", "raj"]);
  expect(axios.get).toHaveBeenCalledWith(url);
  expect(axios.get).toHaveBeenCalledTimes(1);
});
