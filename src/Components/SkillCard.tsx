import React from "react";

const skillIcons: Record<string, string> = {
  C: "c-.png",
  Canva: "Canva.png",
  CSS: "css-3.png",
  Docker: "Docker.png",
  Eclipse: "Eclipse IDE.png",
  "Express JS": "Express.png",
  Figma: "Figma.png",
  Git: "Git.png",
  SQlite: "SQLite.png",
  Ganche: "Ganche.png",
  GitHub: "GitHub.png",
  "GitHub Actions": "GitLab.png",
  HTML: "html-5.png",
  "IntelliJ IDEA": "IntelliJ IDEA.png",
  Java: "java.png",
  JavaScript: "JavaScript.png",
  Jenkins: "Jenkins.png",
  "Job Portal": "JobProtal.png",
  JWT: "jwt.png",
  Lombok: "lombok.png",
  MongoDB: "MongoDB.png",
  "Node JS": "node-js.png",
  PostgreSQL: "postgress.png",
  Postman: "Postman.png",
  "React JS": "React.png",
  Solidity: "solidity.png",
  "Spring Boot": "Spring.png",
  "Spring MVC": "spring-mvc.png",
  "Spring Security": "Spring-Security.png",
  MySQL: "sql.png",
  SQL: "msql.png",
  Swagger: "Swagger.png",
  "Tailwind CSS": "Tailwind CSS.png",
  "VS Code": "VS code.png",
  "Web3.js": "Web3.png",
};

const skillBadgeClasses = {
  wrapper:
    "flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 mb-1",
  icon: "w-6 h-6 object-contain",
  text: "text-textColor text-sm font-medium",
};

const skillCardClasses = {
  card: `
    w-[47%] sm-mx:w-full
    p-5 mb-3 rounded-3xl border border-primaryColor
    shadow-[0_0_10px_0_#A78BFA40]
    transition-all duration-300 ease-in-out transform
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-[0_0_25px_0_#A78BFA80]
    hover:border-purple-400
    hover:bg-[#1a1a2e]
  `,

  title: `
    text-2xl font-bold text-primaryColor text-center mb-4
    transition-colors duration-300
    group-hover:text-headingColor
  `,

  container: `
    flex flex-wrap justify-center gap-3
    transition-all duration-300
    group-hover:gap-4
  `,
};
type SkillBadgeProps = {
  skills: string[];
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => {
        const fileName = skillIcons[skill];
        const iconUrl = fileName ? `/Portfolio/Logo/${fileName}` : null;

        return (
          <div key={index} className={skillBadgeClasses.wrapper}>
            {iconUrl ? (
              <img
                className={skillBadgeClasses.icon}
                src={iconUrl}
                alt={skill}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className={skillBadgeClasses.icon} />
            )}
            <span className={skillBadgeClasses.text}>{skill}</span>
          </div>
        );
      })}
    </>
  );
};

type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className={skillCardClasses.card}>
      <div className={skillCardClasses.title}>{title}</div>
      <div className={skillCardClasses.container}>
        <SkillBadge skills={skills} />
      </div>
    </div>
  );
};

export default SkillCard;
