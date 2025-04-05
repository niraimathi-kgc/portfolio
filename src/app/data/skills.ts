export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Cloud & DevOps",
    items: [
      "Azure",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Infrastructure as Code"
    ]
  },
  {
    category: "Programming Languages and Scripting",
    items: [
      "Python",
      "Shell Scripting",
      "PowerShell",
      "SQL"
    ]
  },
  {
    category: "Web Technologies",
    items: [
      "Django",
    ]
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL"
    ]
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "VS Code",
      "Postman",
      "Cursor",
      "Jira",
      "Agile Methodologies",
      "Linux",
      "Bash Scripting",
      "Ansible",
      "Prometheus",
      "Grafana",
      "SonarQube",
      "Helm",
      "Black Duck",
      "Coverity",
      "Prisma Cloud - Twistlock",
      "Kubernetes"
      
    ]
  }
]; 