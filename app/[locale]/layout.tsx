import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalStatus } from "@/components/GlobalStatus";
import { StatusProvider } from "@/context/StatusContext";
import { UserProvider } from "@/context/UserContext";
import { Providers } from "./providers";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  style: "normal",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Joe",
    template: "%s | Joe",
  },
  description: "Joe, front-end developer in Bordeaux.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <StatusProvider>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} font-sans h-full antialiased`}
        >
          <Providers locale={params.locale}>
            <UserProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {/* <LoaderProvider> */}
                <GlobalStatus />
                <Header />
                {children}
                <Footer />
                {/* </LoaderProvider> */}
              </ThemeProvider>
            </UserProvider>
          </Providers>
        </body>
      </html>
    </StatusProvider>
  );
}
