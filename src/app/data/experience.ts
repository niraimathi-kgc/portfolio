export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "DevOps Engineer",
    company: "Utthunga Technologies Pvt. Ltd",
    duration: "Jul 2024 - Present",
    location: "Bangalore, Karnataka, India",
    description: [
      "Implemented and maintained CI/CD pipelines using Jenkins and Azure DevOps",
      "Automated deployment processes reducing deployment time by 40%",
      "Managed cloud infrastructure on Azure with focus on security and scalability",
      "Set up monitoring and alerting systems using Azure Monitor and Application Insights",
      "Implemented infrastructure as code using Terraform and Azure ARM templates",
      "Developed and maintained backend services using Python and Django",
      "Collaborated with cross-functional teams to implement new features",
      "Worked on database optimization and performance improvements",
      "Participated in code reviews and technical discussions"
    ],
    technologies: [
      "Azure", "Jenkins", "Docker", "Kubernetes", "Terraform", "GitHub Actions",
      "Python", "Django", "PostgreSQL", "RESTful APIs", "Git", "Helm", "Prometheus", "Grafana"
    ]
  },
  {
    title: "Associate Engineer- Software",
    company: "Utthunga Technologies Pvt. Ltd",
    duration: "Jul 2022 - Sept 2024",
    location: "Bangalore, Karnataka, India",
    description: [
      "Assisted in developing web applications and services",
      "Learned and implemented best practices in software development",
      "Contributed to team projects and documentation"
    ],
    technologies: ["Docker", "Kubernetes", "Azure", "Jenkins", "SonarQube", "Version Control"]
  }
]; 