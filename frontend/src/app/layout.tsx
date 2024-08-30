import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Onboarding testing",
  description: "Onboarding testing description",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className='font-mainFont '>{children}</body>
  </html>
);

export default RootLayout;
