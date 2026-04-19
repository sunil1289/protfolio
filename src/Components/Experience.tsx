import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  type?: string;
  desc: string;
  skills: string[];
};

const SkillChip = ({ label }: { label: string }) => (
  <span className="text-xs px-3 py-[3px] rounded-full border border-primaryColor/40 text-textColor bg-primaryColor/5 whitespace-nowrap">
    {label}
  </span>
);

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    className="
      border border-primaryColor/30 rounded-2xl p-5 sm-mx:p-4
      bg-bgColor/40
      hover:-translate-y-1.5 transition-transform duration-300 ease-in-out
      shadow-[0_0_12px_0_#A78BFA18]
    "
  >
    <div className="flex items-center gap-4 mb-4">
      <img
        src={`/Logo/${item.company}.png`}
        alt={item.company}
        className="w-14 h-14 rounded-xl object-contain border border-primaryColor/20 bg-white/5 p-1 flex-shrink-0 sm-mx:w-11 sm-mx:h-11"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const fallback = el.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />

      <div
        className="w-14 h-14 rounded-xl border border-primaryColor/20 bg-primaryColor/10 flex-shrink-0 items-center justify-center text-primaryColor font-semibold text-sm sm-mx:w-11 sm-mx:h-11"
        style={{ display: "none" }}
      >
        {item.company.slice(0, 2).toUpperCase()}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold text-xl leading-snug truncate sm-mx:text-lg xs-mx:text-base">
          {item.role}
        </h3>
        <p className="text-textColor text-sm mt-0.5 sm-mx:text-xs">
          <span className="text-primaryColor font-medium">{item.company}</span>
          &nbsp;&bull;&nbsp;{item.date}
        </p>
      </div>

      {item.type && (
        <span className="text-[11px] px-3 py-1 rounded-full border border-primaryColor/50 text-primaryColor bg-primaryColor/10 flex-shrink-0 sm-mx:hidden">
          {item.type}
        </span>
      )}
    </div>

    <hr className="border-primaryColor/15 mb-4" />

    <p className="text-textColor text-sm leading-relaxed text-justify mb-4 xs-mx:text-xs">
      {item.desc}
    </p>

    <div className="flex flex-wrap items-center gap-2">
      <span className="text-white text-xs font-semibold flex-shrink-0">
        Skills:
      </span>
      {item.skills.map((skill, i) => (
        <SkillChip key={i} label={skill} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const iconSize = useMatches({ xs: 14, md: 16 });
  const bulletSize = useMatches({ xs: 26, md: 30 });

  return (
    <section
      id="Experience"
      className="px-16 mx-20 lg-mx:mx-0 md-mx:px-6 sm-mx:px-3 my-10 mb-28 font-mono"
    >
      <h2 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-center text-white mb-12">
        <span className="text-headingColor">Experience</span>
      </h2>

      <Timeline
        color="#A78BFA"
        active={ExperienceInfo.length}
        bulletSize={bulletSize}
        lineWidth={2}
        classNames={{
          itemBody: "!pb-0",
        }}
      >
        {ExperienceInfo.map((item: ExperienceItem, index: number) => (
          <Timeline.Item
            key={index}
            className="!pt-10 !mb-0 sm-mx:!pt-7"
            bullet={
              <IconBriefcaseFilled className="!text-bgColor" size={iconSize} />
            }
          >
            <ExperienceCard item={item} />
          </Timeline.Item>
        ))}

        <Timeline.Item
          bullet={
            <IconBriefcaseFilled
              className="!text-primaryColor"
              size={iconSize}
            />
          }
        />
      </Timeline>
    </section>
  );
};

export default Experience;
