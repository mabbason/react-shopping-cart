import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ProductAddForm from './ProductAddForm'

describe("ProductAddForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<ProductAddForm onSubmit={func} />)
  });
  
  it("contains Add Product header", () => {
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Add Product")
  });
  
  it("contains a label for the Quantity input", () => {
    const qtyLabel = screen.getByText("Quantity");
    expect(qtyLabel).toBeDefined();
  });

  test("clicking the submit button call the event handler once", () => {
    const user = userEvent.setup();
    const button = screen.getByRole('link', {name: "Add"});
    userEvent.click(button);
    expect(func.mock.calls).toHaveLength(1);
  })
})
