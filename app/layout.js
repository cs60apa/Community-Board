import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rale = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate",
  description: "Build with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rale.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
