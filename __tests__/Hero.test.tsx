// import Hero from "@/app/[locale]/try/page";
// import { render, screen } from "@testing-library/react";
// import { NextIntlClientProvider } from "next-intl";

// jest.mock("next-intl", () => ({
//   useTranslations: () => jest.fn(),
//   useLocale: () => jest.fn(),
// }));

// jest.mock("@/context/UserContext", () => ({
//   useUser: () => jest.fn(),
// }));

// it("renders h1", () => {
//   render(
//     <NextIntlClientProvider locale="en">
//       <Hero />
//     </NextIntlClientProvider>
//   );
//   expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
// });
