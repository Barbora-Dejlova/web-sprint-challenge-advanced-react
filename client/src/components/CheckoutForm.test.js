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

  fireEvent.change(firstNameInput, { target: { value: "barbora" }})
  fireEvent.change(lastNameInput, { target: { value: "dejlova" }})
  fireEvent.change(addressInput, { target: { value: "street" }})
  fireEvent.change(cityInput, { target: { value: "leonia" }})
  fireEvent.change(stateInput, { target: { value: "new jersey" }})
  fireEvent.change(zipInput, { target: { value: "07605" }})

  expect(getByDisplayValue(/barbora/i)).toBeInTheDocument()
  expect(getByDisplayValue(/dejlova/i)).toBeInTheDocument()
  expect(getByDisplayValue(/street/i)).toBeInTheDocument()
  expect(getByDisplayValue(/leonia/i)).toBeInTheDocument()
  expect(getByDisplayValue(/new jersey/i)).toBeInTheDocument()
  expect(getByDisplayValue(/07605/i)).toBeInTheDocument()

  const checkoutSubmit = getByTestId(/submitCheckout/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit)

  const successMessage = getByTestId(/successMessage/i)
  expect(successMessage).toBeInTheDocument()
});