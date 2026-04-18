import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  live?: boolean;
  link?: string;
  github?: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  desc,
  image,
  live,
  link,
  github,
  technologies,
}: ProjectCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const badgeSize = useMatches({
    base: "xs",
    xs: "sm",
    md: "md",
    lg: "sm",
  });

  const handleShowMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    open();
  };

  return (
    <div
      className="flex flex-col h-full"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <Card
        onClick={open}
        className="
          !bg-bgColor cursor-pointer
          flex flex-col !h-full
          !border-2 !border-primaryColor/20
          transition-all duration-300 ease-in-out
          hover:!border-primaryColor
          hover:!shadow-[0_0_20px_rgba(100,255,218,0.2)]
          hover:!-translate-y-1.5
        "
        shadow="md"
        padding="md"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl !shadow-[0_0_6px_0_rgba(100,255,218,0.15)]"
            src={image}
            alt={title}
            height={160}
            fit="cover"
            fallbackSrc="https://placehold.co/600x160?text=No+Image"
          />
        </Card.Section>

        <Group justify="space-between" mt="sm" mb="xs" wrap="nowrap">
          <Text
            className="!text-white !font-semibold !text-base sm-mx:!text-sm"
            lineClamp={1}
          >
            {title}
          </Text>
          {live && (
            <Badge
              className="!shrink-0 !px-1.5"
              variant="outline"
              color="red"
              size="sm"
              rightSection={
                <Indicator
                  className="!mr-0.5 !z-0"
                  color="red"
                  position="middle-end"
                  size={6}
                  processing
                />
              }
            >
              Live
            </Badge>
          )}
        </Group>

        <Group mb="sm" gap={6} wrap="wrap">
          {technologies.slice(0, 3).map((tech: string, i: number) => (
            <Badge key={i} size={badgeSize} variant="light" color="#A78BFA">
              {tech}
            </Badge>
          ))}
        </Group>

        <Text
          className="!text-justify !text-sm xs-mx:!text-xs !flex-1"
          lineClamp={4}
          size="sm"
          c="dimmed"
        >
          {desc}
        </Text>

        <Button
          onClick={handleShowMore}
          color="#A78BFA"
          variant="outline"
          mt="md"
          radius="md"
          fullWidth
          className="
            !font-mono !text-sm
            !transition-all !duration-200
            hover:!bg-primaryColor hover:!text-bgColor
          "
        >
          Show More
        </Button>
      </Card>

      <FullProjectModal
        opened={opened}
        close={close}
        title={title}
        desc={desc}
        image={image}
        live={live}
        link={link ?? ""}
        github={github ?? ""}
        technologies={technologies}
      />
    </div>
  );
};

export default ProjectCard;
