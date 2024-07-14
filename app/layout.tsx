import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Estatein",
	description:
		"Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
	icons: {
		icon: "/icons/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
