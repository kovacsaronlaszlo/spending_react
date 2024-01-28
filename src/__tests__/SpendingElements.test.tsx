import { render } from "@testing-library/react";
import { SpendingElement } from "../components";
import { Spending } from "../types/types";

jest.mock("../hooks", () => ({
  useAppDispatch: jest.fn(),
}));

describe("SpendingElement Component Tests", () => {
  const sampleSpending: Spending = {
    id: 1,
    description: "Test Spending",
    amount: 100,
    currency: "USD",
    spent_at: "2023-12-16T15:24:58.844000Z"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders spending details correctly", () => {
    const { getByText } = render(<SpendingElement spending={sampleSpending} />);
    expect(getByText("Test Spending - 100 USD")).toBeInTheDocument();
  });
});
