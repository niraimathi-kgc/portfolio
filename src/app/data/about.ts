export interface About {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  highlights: string[];
}

export const about: About = {
  name: "Niraimathi K G C",
  title: "DevOps Engineer",
  summary: "DevOps Engineer with 3+ years of experience in cloud infrastructure, automation, and full-stack development. Passionate about implementing efficient CI/CD pipelines and maintaining scalable cloud infrastructure. Skilled in Azure, Jenkins, Docker, and various DevOps tools.",
  location: "Bangalore, Karnataka, India",
  email: "niraimathikgc@gmail.com",
  socialLinks: {
    github: "https://github.com/niraimathi-kgc",
    linkedin: "https://www.linkedin.com/in/niraimathikgc"
  },
  highlights: [
    "Expertise in cloud infrastructure and DevOps practices",
    "Strong background in full-stack development",
    "Experience with modern CI/CD tools and practices",
    "Proven track record in automation and optimization",
    "Team player with excellent communication skills"
  ]
}; 