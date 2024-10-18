import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/[locale]/contact/page";

describe("ContactPage", () => {
  it("renders a heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
