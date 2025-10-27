import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"; // ✅ import Toaster

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Karan Rathod - Portfolio",
  description: "Welcome to my portfolio. I'm Karan Rathod, a passionate developer showcasing my projects and skills.",
  openGraph: {
    title: 'Karan Rathod - Portfolio',
    description: 'Welcome to my portfolio. I\'m Karan Rathod, a passionate developer showcasing my projects and skills.',
    url: 'https://portfolio-nine-jet-46.vercel.app/', // Replace with your actual portfolio URL
    siteName: 'Karan Rathod Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Replace with your Open Graph image path
        width: 1200,
        height: 630,
        alt: 'Karan Rathod Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karan Rathod - Portfolio',
    description: 'Passionate developer showcasing my projects and skills',
    images: ['/twitter-image.jpg'], // Replace with your Twitter card image path
  },
  metadataBase: new URL('https://portfolio-nine-jet-46.vercel.app/'), // Replace with your actual portfolio URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}

        {/* ✅ Toaster for notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
