import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-bangla",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "কোথায় যাবো? (Kothay Jabo) - ভ্রমণ আবিষ্কার ও ট্রাভেল প্ল্যানার",
  description: "কোথায় ঘুরতে যাবেন বুঝতে পারছেন না? চাকা ঘুরিয়ে আবিষ্কার করুন বাংলাদেশের সেরা ভ্রমণ স্থান, সঠিক ভাড়া, দূরত্ব ও আকর্ষণ।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to apply theme before first paint — avoids flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('kj-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 dark:bg-[#0c1117] text-slate-800 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
