"use client";

import "./globals.css";
import { Urbanist } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import LocalePage from "@/components/home/LocalePage";
import FloatingWhatsApp from "@/components/barber/FloatingWhatsApp";
import Script from "next/script";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <html lang="es-co">
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1591221842320517');
          fbq('track', 'PageView');
        `,
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GMC6C2XWDQ"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GMC6C2XWDQ', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <body className={urbanist.className}>
          <FloatingWhatsApp phoneNumber="+573054764557" />
          <LocalePage>{children}</LocalePage>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1591221842320517&ev=PageView&noscript=1"
            />
          </noscript>
        </body>
      </html>
    </GoogleReCaptchaProvider>
  );
}
