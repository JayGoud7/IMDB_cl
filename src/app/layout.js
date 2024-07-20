import { Inter } from "next/font/google";
import NavBar from "../components/header/NavBar";
import "../components/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description: "created by create next-js",
  icons: {
    icon: [
      {
        url: "/image/favicon.ico",
        href: "/image/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
