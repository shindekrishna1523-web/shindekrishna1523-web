import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Krishnakant Shinde | Senior Full-Stack .NET Developer",
    description:
        "Krishnakant Shinde is a Senior Full-Stack .NET Developer specializing in C#, .NET, ASP.NET Core, REST APIs, SQL Server, React, Next.js and cloud technologies.",
    keywords: [
        "Krishnakant Shinde",
        "Senior .NET Developer",
        "Full-Stack .NET Developer",
        "C# Developer",
        "ASP.NET Core Developer",
        "Web API Developer",
        "React Developer",
        "Next.js Developer",
        "SQL Server Developer",
        "Azure Developer",
    ],
    authors: [
        {
            name: "Krishnakant Shinde",
        },
    ],
    creator: "Krishnakant Shinde",

    // 👇 FAVICON
    icons: {
        icon: "/icon.png",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },

    metadataBase: new URL("https://krishnakant.is-a.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Krishnakant Shinde | Senior Full-Stack .NET Developer",
        description:
            "Portfolio of Krishnakant Shinde, a Senior Full-Stack .NET Developer focused on scalable APIs, modern web applications and reliable software systems.",
        url: "https://krishnakant.is-a.dev",
        siteName: "SR.DEV",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
