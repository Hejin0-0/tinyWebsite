import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";

export default function Contact() {
	return (
		<>
			<Image
				src={bg}
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
			/>

			<article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
				<div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
					<h1 className="text-accent font-semibold text-center text-4xl capitalize">
						summon the wizard
					</h1>
					<p className="text-center font-light text-sm xs:text-base">
						Enter the circle of enchantment and thread your words
						into the tapestry of the universe. Whether you wish to
						summon collaborations, unravel mysteries, or share tales
						of adventure, your messages are valued scrolls within
						this realm. Use the form provided below to dispatch your
						missives through the ethereal network, and anticipate
						the murmurs of magic in reply.
					</p>
				</div>
				<From />
			</article>
		</>
	);
}
