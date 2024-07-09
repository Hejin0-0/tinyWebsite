import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata = {
	title: {
		template:
			"Next.js Portfolio Created with Three.js and Tailwind CSS | %s |",
		default: "Next.js Portfolio Created with Three.js and Tailwind CSS",
	},
	description:
		"This is a web portfolio designed by YouTuber CodeBugs in the languages Next.js, Tailwind CSS, and Three.js.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={clsx(
					inter.variable,
					"bg-background text-foreground font-inter"
				)}
			>
				{children}
				<FireFliesBackground />
				<Sound />
				<div id="my-modal" />
			</body>
		</html>
	);
}
