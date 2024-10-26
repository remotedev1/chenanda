import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/frontend/homepage/navbar";
import Footer from "@/components/frontend/homepage/Footer";

// import { ModalProvider } from "@/providers/modal-provider";
// import { ToastProvider } from "@/providers/toast-provider";
// import { DataProvider } from "@/providers/data-provider";
// import Script from "next/script";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Chenanda",
  description: "official website for Chenanda",
  openGraph: {
    title: "Chenanda",
    description: "official website for Chenanda",
    url: "https://chenanda.in",
    images: [
      {
        url: "/website-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "chenanda",
      },
    ],
    siteName: "chenanda",
  },
  icons: {
    icon: "/favicon.ico", // Path to the favicon
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  return (
      <html lang={locale}>
        <body className={font.className}>
          {/* //TODO */}
          {/* Google Tag (gtag.js) */}
          {/* <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16734494463"
            strategy="afterInteractive"
          /> */}

          {/* <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16734494463');
          `}
          </Script> */}
          {/* Google Tag Conversion Event */}
          {/* <Script id="gtag-conversion" strategy="afterInteractive">
            {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16734494463/LahfCMes1NsZEP-90Ks-' 
            });
          `}
          </Script> */}

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
  );
}

export const viewport = {
  themeColor: "#FFFFFF",
};
