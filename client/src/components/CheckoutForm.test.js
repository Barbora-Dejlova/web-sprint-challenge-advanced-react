import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const checkoutHeader = getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByTestId, getByDisplayValue } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
  expect(cityInput).toBeInTheDocument();
  expect(stateInput).toBeInTheDocument();
  expect(zipInput).toBeInTheDocument();

  fireEvent.change(firstNameInput, { target: { value: "Barbora" }})
  fireEvent.change(lastNameInput, { target: { value: "Dejlova" }})
  fireEvent.change(addressInput, { target: { value: "street" }})
  fireEvent.change(cityInput, { target: { value: "Leonia" }})
  fireEvent.change(stateInput, { target: { value: "New Jersey" }})
  fireEvent.change(zipInput, { target: { value: 7026 }})

