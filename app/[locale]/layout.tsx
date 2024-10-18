import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalStatus } from "@/components/GlobalStatus";
import { StatusProvider } from "@/context/StatusContext";
import { UserProvider } from "@/context/UserContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: `Joe | ${t("layout.root")}`,
      template: "%s | Joe",
    },
    description: t("layout.rootDescription"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <StatusProvider>
      <html lang={locale} className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} font-sans h-full antialiased bg-gradient-to-r from-[#efeffd] from-20% via-[#ede5ff] to-80% to-[#efeffd] dark:from-[#050510] dark:from-20% dark:via-[#100a1d] dark:to-80% dark:to-[#050510]`}
        >
          <NextIntlClientProvider messages={messages}>
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
          </NextIntlClientProvider>
        </body>
      </html>
    </StatusProvider>
  );
}
