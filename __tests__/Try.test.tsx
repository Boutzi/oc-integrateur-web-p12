import Try from "@/app/[locale]/try/page";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

it("renders h1", () => {
  render(
    <NextIntlClientProvider locale="en">
      <Try />
    </NextIntlClientProvider>
  );
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});
