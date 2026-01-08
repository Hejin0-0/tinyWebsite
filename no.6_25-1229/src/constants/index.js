const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Jun 30, 2024 ~",
        title: "Web Sketchbook: A Collection of Interactive 3D & 2D Experiments",
        image: "/images/blog1.png",
        link: "https://github.com/Hejin0-0/Lab_WebSketch",
    },
    {
        id: 2,
        date: "April 4, 2024",
        title:
            "Interactive 3D Configurator with React Three Fiber and Valtio",
        image: "/images/blog2.png",
        link: "https://github.com/Hejin0-0/tinyWebsite/tree/main/No.1_24-0404",
    },
    {
        id: 3,
        date: "June 24, 2024",
        title: "Arcane Portfolio: Where Code Meets Magic",
        image: "/images/blog3.png",
        link: "https://next-js-creative-portfolio-website.vercel.app/",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["JavaScript", "React.js", "Next.js"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Kotlin", "Flutter"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Django", "Node.js", "Flask"],
    },
    {
        category: "Database",
        items: ["MySQL", "Cloudflare"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Hejin0-0",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://github.com/Hejin0-0",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/Lotteries18",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/rels0w0",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.jpg",
    },
    {
        id: 4,
        img: "/images/gal4.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Web Sketchbook",
            icon: "/images/blog1.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Web Sketchbook.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Lab_WebSketch is an experimental playground where creative coding meets high-performance web graphics.",
                        "It moves beyond static layouts to explore the full potential of HTML5 Canvas, JavaScript, and Three.js for immersive storytelling.",
                        "The project features a variety of interactive visual effects, ranging from complex 2D particle systems to dynamic 3D environments.",
                        "Focusing on mathematical precision and smooth rendering, it serves as a showcase of advanced front-end capabilities in visual computing.",
                    ],
                },
                {
                    id: 2,
                    name: "web-sketchbook.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "web-sketchbook.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/blog1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "3D Product Configurator",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-20 left-10",
            windowPosition: "top-[15vh] left-[10vw]",
            children: [
                {
                    id: 1,
                    name: "Configurator Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "The 3D Configurator is a high-end product customization tool designed for a premium and interactive shopping experience.",
                        "It allows users to modify textures, colors, and components of a 3D model in real-time with smooth, lag-free transitions.",
                        "Utilizing Valtio for lightweight state management and Framer Motion for UI animations, the platform ensures a fluid and intuitive workflow.",
                        "This project showcases mastery in 3D optimization, professional lighting setups, and advanced post-processing effects within the browser.",
                    ],
                },
                {
                    id: 2,
                    name: "3d-configurator.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://google.com",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "product-preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/blog2.png",
                },
                {
                    id: 5,
                    name: "Blender-Model.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "The Wizard's Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "bottom-10 right-20",
            windowPosition: "top-[25vh] right-[15vw]",
            children: [
                {
                    id: 1,
                    name: "Arcane Portfolio Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "The Wizard's Portfolio is a mystical web experience that reimagines a professional showcase as an arcane RPG journey.",
                        "Built with Next.js, it features a celestial dark-themed UI with intricate magic-circle animations and star-dusted backgrounds.",
                        "The project delivers a unique interactive dashboard where user stats and projects are presented like a character's spellbook or inventory.",
                        "It harmonizes immersive background music with smooth Framer Motion transitions, creating a magical atmosphere that captivates every visitor.",
                    ],
                },
                {
                    id: 2,
                    name: "wizard-portfolio.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://next-js-creative-portfolio-website.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "arcane-preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/blog3.png",
                },
                {
                    id: 5,
                    name: "Mystical-Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.google.com",
                    position: "top-60 left-5",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Lantern-Guide.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/ch1.jpg",
        },
        {
            id: 2,
            name: "Red-Moment.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/ch2.jpg",
        },
        {
            id: 3,
            name: "Flow-of-Time.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/ch3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/ch4.jpg",
            description: [
                "Hi! I’m Hejin0-0 👋, a creative developer who bridges the gap between complex logic and stunning visual experiences.",
                "I specialize in React, Next.js, and Three.js—transforming standard web pages into immersive 3D worlds and interactive canvases.",
                "I’m obsessed with performance optimization, smooth framerates, and crafting UIs so clean they feel like digital art.",
                "When I'm not deep in WebGL shaders or tRPC logic, you'll find me exploring arcane design trends at 3AM or obsessing over the perfect curve in a Canvas animation 🎨",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume-sample.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };