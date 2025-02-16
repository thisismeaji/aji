import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets : ["latin"],
  weight : ["200","300","400","500","600","700",],
  variable : "poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navigation/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
