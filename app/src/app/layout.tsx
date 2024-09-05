import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";
import "@/styles/main.scss";
import ThemeManager from "@/components/Theme/ThemeManager";
import Loader from "@/components/Theme/Loader";

export const metadata = {
  title: {
    default: "Joe",
    template: "%s | Joe",
  },
  description: "Joe, front-end developer in Bordeaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeManager />
          {/* <div className="container"> */}
            <Header />
            {children}
            <Footer />
          {/* </div> */}
        </StoreProvider>
      </body>
    </html>
  );
}
