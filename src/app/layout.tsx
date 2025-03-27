import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Layout } from "@/components";
import ContactFloatButton from "@/components/contact-float-button"; // import به همین شکل باقی می‌ماند

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "موسسه روانشناسی دنیای مطلوب",
  description: "ارائه خدمات روانشناسی و مشاوره آنلاین",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} font-sans`}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-vazir">
        <Layout>
          {children}
          <ContactFloatButton />
        </Layout>
      </body>
    </html>
  );
}