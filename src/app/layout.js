import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
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
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
