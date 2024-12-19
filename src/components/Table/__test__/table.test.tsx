import { render, screen } from "@testing-library/react";
import { useProjectData } from "../../../lib/api/projects/hooks";
import Table from "../../Table";

jest.mock("../../../lib/api/projects/hooks", () => ({
  useProjectData: jest.fn(),
}));

test("renders table with correct data", () => {
  const mockData = [
    { "s.no": 1, "percentage.funded": "186%", "amt.pledged": "$ 15823" },
  ];

  (useProjectData as jest.Mock).mockReturnValue({
    data: mockData,
    isLoading: false,
    error: null,
  });

  render(<Table />);

  expect(screen.getByText("S.No.")).toBeInTheDocument();
  expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
  expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("186%%")).toBeInTheDocument();
  expect(screen.getByText("$ $ 15823")).toBeInTheDocument();
});
