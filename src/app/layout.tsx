import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-soft",
    weight: ["500", "700"],
});

export const metadata: Metadata = {
    title: "Strawberry Design | Håndlaget magi",
    description:
        "Velkommen til Strawberry Design - Vi skaper magi med farger og form. Vi tilbyr unike, håndlagde designløsninger som bringer dine ideer til liv. La oss hjelpe deg med å skape noe fantastisk i dag!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='no' className={`${inter.variable} ${quicksand.variable}`}>
            <body>{children}</body>
        </html>
    );
}
