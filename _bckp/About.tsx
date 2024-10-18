import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "@/app/[locale]/about/page";

describe("AboutPage", () => {
  it("renders a heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
