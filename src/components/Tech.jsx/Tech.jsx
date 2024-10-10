import { IconCloud } from "./TechComponent";
import "./Tech.css"

const slugs = [
  "javascript",
  "react",
  "python",
  "sqlite",
  "mongodb",
  "shadcn",
  "postman",
  "django",
  "materialui",
  "chakraui",
  "php",
  "laravel",
  "wordpress",
  "nextjs",
  "tailwindcss",
  "hapijs",
  "jwt",
  "redis",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodejs",
  "express",
  "amazonaws",
  "mysql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "seo",
  "sao",
];

export function IconCloudDemo() {
  return (
    <div className="tech-container" id='technology-section'>
        <div className="tech-icons-container">
            <IconCloud iconSlugs={slugs} />
        </div>
        <div className="tech-text-container">
            <h1 className="tech-text-head">Comprehensive Android, Web, and Digital Marketing Solutions Powered by Modern Technology</h1>
            <p className="tech-text-description">At our company, we leverage a diverse and cutting-edge technology stack to deliver high-quality Android, web, and digital marketing services tailored to our clients' needs. Our expertise spans across a wide range of tools and platforms to ensure scalability, flexibility, and efficiency in every project.</p>
            <button className="hero-touch-button" onClick={() => document.getElementById("teams-section").scrollIntoView({behavior: "smooth"})}>
              Our Team <span>&rarr;</span>
            </button>
        </div>
    </div>
  );
}
