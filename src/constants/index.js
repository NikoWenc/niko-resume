export const navLinks = [
  { name: "N I K O", href: "#Home" },
  { name: "Home", href: "#Home" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export const heroContent = {
  label: "Web Developer",
  headline: "Romnick Pol P. Wenceslao",
  description:
    "An aspiring web developer on a mission to build digital solutions that make a real impact. Driven by logic, continuous learning, and a “day one” mindset, I am eager to contribute high-quality code and fresh perspectives to a forward-thinking development team.",
  sendEmail: "SEND AN EMAIL",
  downloadCV: "DOWNLOAD CV",
  image: "/niko.PNG",
};

export const skills = [
  {
    category: "Languages",
    icon: "terminal",
    items: ["JavaScript", "SQL"],
  },
  {
    category: "Build & Deployment Tools",
    icon: "build",
    items: ["Webpack", "Vite", "Vercel", "Netlify", "Render"],
  },
  {
    category: "Web Development / UI Frameworks",
    icon: "web",
    items: [
      "HTML",
      "CSS",
      "Sass",
      "React.js",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
    ],
    layout: "inline",
  },
  {
    category: "Version Control & IDEs",
    icon: "source",
    items: ["VS Code", "Git", "GitHub"],
  },
  {
    category: "Server and Database Technologies",
    icon: "cloud_upload",
    items: ["Node.js (Express)", "MongoDB (Mongoose)"],
  },
  {
    category: "AI-Assisted Development & Design",
    icon: "auto_awesome",
    items: ["GitHub Copilot", "Gemini / GPT-5.3", "Google Stitch"],
  },
];

export const projects = [
  {
    title: "Simple E-commerce",
    year: "2026",
    description:
      "A simple e-commerce application built with React.js that utilizes the FakeStore API for dynamic product listings and login authentication, includes shopping cart functionality, and features a responsive design for a seamless user experience across devices, deployed on Vercel.",
    image: "/ecommerce-clone.png",
    link: "https://niko-shopping-cart.vercel.app",
    cta: "Simple E-commerce",
  },
  {
    title: "Crud App",
    year: "2026",
    description:
      "A simple CRUD application built with React.js for the frontend and Node.js with Express.js for the backend, utilizing MongoDB for data storage. The app allows users to create, read, update, and delete records through a user-friendly interface, demonstrating full-stack development skills and deployed on Render.",
    image: "/crud-app.png",
    link: "https://niko-crud-app.vercel.app",
    cta: "Crud App",
  },
];

export const footerContent = {
  quote: "“Simplicity is the ultimate sophistication.”",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/romnick-wenceslao/",
    },
    { name: "GitHub", href: "https://github.com/NikoWenc" },
    { name: "Email", href: "mailto:nikowenceslao11@gmail.com" },
  ],
};
