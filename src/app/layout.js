import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import "../components/Home.css";
import "../components/AboutUs.css";
import "../components/Nav.css";
import "../components/Contact.css";
import "../components/Services.css";
import "../components/ServiceDetails.css";
import "../components/Gallery.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



import Loader from "../components/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Sri Ramakrishna Hospital",
  description: "Sri Ramakrishna Hospital",
  icons: {
    icon: '/favicon/cropped-ramakrishna-logo-32x32.png',
    shortcut: '/favicon/cropped-ramakrishna-logo-32x32.png',
    apple: '/favicon/cropped-ramakrishna-logo-180x180.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=BBH+Hegarty&family=Bebas+Neue&family=Changa+One:ital@0;1&family=Damion&family=Figtree:ital,wght@0,300..900;1,300..900&family=Geom:ital,wght@0,300..900;1,300..900&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Momo+Signature&family=Momo+Trust+Display&family=Notable&family=Paytone+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sekuya&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable}`}>
        <Loader />
        <Nav />
        {children}

        <Footer />
      </body>
      {/* Force Refresh */}
    </html>
  );
}
