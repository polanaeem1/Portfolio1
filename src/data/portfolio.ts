export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  problemSolved: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements: string[];
}

export const portfolioData = {
  name: "Pola Naeem",
  role: " Junior Full-Stack Engineer",
  tagline: "Building high-performance web experiences with precision and purpose.",
  about: {
    intro: "I'm a product-minded software engineer with 2+ years of experience in building scalable web applications. I specialize in React, TypeScript, and Node.js, with a strong focus on UX and performance.",
    specialization: "Frontend Architecture & System Design",
    value: "I help companies bridge the gap between complex backend systems and intuitive user interfaces, ensuring that speed and accessibility are never compromised.",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Firebase", "Redis"]
    },
    {
      category: "Infrastructure & Tools",
      items: ["Docker", "AWS (S3, EC2, Lambda)", "GitHub Actions", "Vite", "Jest", "Playwright"]
    }
  ],
  projects: [
    {
      id: "pro-1",
      title: "Fixaway",
      description: "A marketplace that connects users with nearby technicians for home and roadside maintenance, with live tracking and an in-app wallet.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Leaflet Maps", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Socket.io"],
      problemSolved: "Resolved the issue of users not being able to find nearby technicians for home and roadside maintenance with live tracking and an in-app wallet.",
      liveUrl: "https://fixaway-website.vercel.app/",
      githubUrl: "https://github.com/polanaeem1/Fixaway-Website-",
      image: "/project-2.png",
    },
    {
      id: "pro-2",
      title: "Zoom Clone",
      description: "A Zoom clone with video calls, chat and file sharing.",
      techStack: ["Next.js", "Tailwind CSS", "Clerk for authentication", "Stream for seamless in-app chat, video, and feeds"],
      problemSolved: "Created a clutter-free Zoom clone that helps users to have seamless in-app chat, video, and feeds.",
      liveUrl: "https://zoom-clone-zeta-cyan.vercel.app/",
      githubUrl: "https://github.com/polanaeem1/Zoom_Clone",
      image: "/project-3.png",
    },
    {
      id: "pro-3",
      title: "Movies Website",
      description: "A movies website that shows movies and tv shows.",
      techStack: ["Next.js", "React Query", "Tailwind CSS"],
      problemSolved: "Created a movies website that shows movies and tv shows.",
      liveUrl: "https://movies-website-nine-beta.vercel.app/",
      githubUrl: "https://github.com/polanaeem1/Movies_Website",
      image: "/project-1.png",
    },
    {
      id: "pro-4",
      title: "Ecommerce Website",
      description: "An ecommerce website that sells clothes and accessories.",
      techStack: ["Next.js", "React Query", "Tailwind CSS"],
      problemSolved: "Created an ecommerce website that sells clothes and accessories.",
      liveUrl: "https://clothing-brand-three-xi.vercel.app/",
      githubUrl: "https://github.com/polanaeem1/Clothing_brand",
      image: "/project-4.png",
    },
    {
      id: "pro-5",
      title: "Cosmetics Website",
      description: "An ecommerce website that sells cosmetics.",
      techStack: ["Next.js", "React Query", "Tailwind CSS"],
      problemSolved: "Created an ecommerce website that sells cosmetics.",
      liveUrl: "https://cosmetics-brand-eight.vercel.app/",
      githubUrl: "https://github.com/polanaeem1/Cosmetics_brand",
      image: "/project-5.png",
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Linux Plus",
      role: "Devops Intern",
      period: "2025 - 2026",
      description: [
        "Learning Linux, Docker, Kubernetes, and related tools to build scalable and efficient systems.",
        "Focused on improving deployment, automation, and infrastructure management skills through continuous hands-on practice.",
      ]
    },
    {
      id: "exp-2",
      company: "SYNC INTERN'S",
      role: "Frontend Developer Internship",
      period: "2022 - 2023",
      description: [
        "Developed high-conversion landing pages and interactive web experiences for clients.",
        "Integrated complex third-party APIs and CMS platforms."
      ]
    }
  ],
  contact: {
    email: "polanaeem50@gmail.com",
    github: "https://github.com/polanaeem1",
    linkedin: "https://www.linkedin.com/in/pola-naeem-6822621b3/",
  }
};
