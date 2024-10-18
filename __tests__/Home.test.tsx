/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import { createI18n } from "next-international";
import { render, screen, waitFor } from "@/lib/customRender"; // Our custom render function.
import en from "@/locales/en";
import Home from "@/app/[locale]/page";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    locale: "en",
    defaultLocale: "en",
    locales: ["en", "fr", "kr"],
  })),
}));
afterEach(() => {
  jest.clearAllMocks();
});

describe("Example test", () => {
  it("just an example", async () => {
    const { useI18n, I18nProvider } = createI18n({
      en: () => import("@/locales/en"),
      fr: () => import("@/locales/fr"),
      kr: () => import("@/locales/kr"),
    });

    render(
      <I18nProvider locale={en as any}>
        <Home />
      </I18nProvider>
    );

    expect(screen.queryByText("Hello")).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Hello")).toBeInTheDocument();
    });
  });
});
