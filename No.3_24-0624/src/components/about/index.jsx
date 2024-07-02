import React, { Children } from "react";

const AboutDetails = () => {
	return (
		<section className="py-20 w-full">
			<div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
				<ItemLayout
					className={
						"col-span-full lg:col-span-8 row-span-2 flex-col items-start"
					}
				>
					<h2 className="text-xl md:text-2xl text-left w-full capitalize">
						Architect of Enchantment
					</h2>
					<p className="font-light text-xs sm:text-sm md:text-base   ">
						My journey in web development is composed of mystical
						tools and languages centered around JavaScript. I am
						studying to create websites (portals) that connect users
						across the digital universe using languages like
						JavaScript and Next.js. It has transformed me from
						someone who only played computer games in the past into
						a designer myself. As I explore new spells and
						technologies to shape the future of the web, ultimately,
						I aspire to step into game development.
					</p>
				</ItemLayout>

				<ItemLayout
					className={
						" col-span-full xs:col-span-6 lg:col-span-4 text-accent"
					}
				>
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						25+{" "}
						<sub className="font-semibold text-base">clients</sub>
					</p>
				</ItemLayout>

				<ItemLayout
					className={
						"col-span-full xs:col-span-6 lg:col-span-4 text-accent"
					}
				>
					<p className="font-semibold w-full text-left text-2xl sm:text-5xl">
						4+{" "}
						<sub className="font-semibold text-base">
							years of experience
						</sub>
					</p>
				</ItemLayout>

				<ItemLayout
					className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
				>
					<img
						className="w-full h-auto"
						src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=hejin0-0&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
						alt="Hejin0-0"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
					<img
						className="w-full h-auto"
						src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=hejin0-0&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
						alt="Hejin0-0"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className={"col-span-full"}>
					<img
						className="w-full h-auto"
						src={`https://skillicons.dev/icons?i=c,cpp,cloudflare,css,dart,django,flutter,figma,git,github,html,js,jquery,linux,kotlin,mysql,nextjs,nodejs,npm,p5js,php,py,react,replit,tailwind,threejs,unreal,vercel,vscode,yarn`}
						alt="Hejin0-0"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
					<img
						className="w-full h-auto"
						src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=hejin0-0&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
						alt="Hejin0-0"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
					<Link
						href="https://github.com/Hejin0-0/tinyGame"
						target="_blank"
						className="w-full"
					>
						<img
							className="w-full h-auto"
							src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=hejin0-0&repo=tinyGame&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
							alt="Hejin0-0"
							loading="lazy"
						/>
					</Link>
				</ItemLayout>
			</div>
		</section>
	);
};

export default AboutDetails;
