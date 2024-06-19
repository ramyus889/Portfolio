import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import "./globals.css";
import "/css/fontStyle.css";
import "/css/Uiverse.css";
import NavbarNextUi from "../componentsUi/NavbarNextUi";
const fontStyle = Mooli({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Next Practice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={fontStyle.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
