import type { Metadata } from "next";
import "./globals.css";
import { Header } from "app/components/header";

export const metadata: Metadata = {
  title: "Felipe Liandro",
  description: "Created By Felipe Liandro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      
      </body>
    </html>
  ); 
}
