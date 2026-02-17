import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.scss";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "atomX — The Future of Innovation",
  description:
    "atomX - Innovate beyond what you imagine. Technology that transforms ideas into reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
