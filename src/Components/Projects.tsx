import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Projects = () => {
  return (
    <section className="px-16 my-10 font-mono md-mx:px-6" id="Projects">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
        <span className="text-headingColor">Projects</span>
      </h1>

      <div className="grid grid-cols-3 lg-mx:grid-cols-2 sm-mx:grid-cols-1 gap-5 md-mx:gap-4 items-stretch">
        {ProjectInfo.map((project: any, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        <p className="text-primaryColor w-fit text-sm tracking-wide">
          Want to see more of my work?
        </p>

        <a
          href="https://github.com/sunil1289"
          target="_blank"
          
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 border border-primaryColor text-primaryColor rounded-xl text-sm font-mono transition-all duration-300 hover:bg-headingColor hover:text-bgColor hover:shadow-[0_0_14px_rgba(100,255,218,0.35)]"
        >
          <GitHubIcon className="w-5 h-5" />
          More Projects
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
