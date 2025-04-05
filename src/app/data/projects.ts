export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features sections for skills, experience, and projects with a clean, professional design. This site is hosted on GitHub Pages and developed using cursor IDE with claude 3.5 sonnet AI assistance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/niraimathi-kgc/portfolio"
  },
  {
    title: "DevOps Automation Suite",
    description: "Developed a comprehensive DevOps automation suite that streamlines CI/CD pipelines, infrastructure provisioning, and monitoring setup using various cloud and automation tools.",
    technologies: ["Python", "Terraform", "Jenkins", "Azure", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/niraimathi-kgc/devops-automation"
  },
  {
    title: "Task Management System",
    description: "A full-stack task management application with features like task creation, assignment, status tracking, and team collaboration capabilities.",
    technologies: ["Django", "PostgreSQL", "React", "Docker", "RESTful APIs"],
    githubUrl: "https://github.com/niraimathi-kgc/task-manager"
  }
]; 