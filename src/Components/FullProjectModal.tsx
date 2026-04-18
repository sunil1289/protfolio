import {
  Badge,
  Button,
  Group,
  Image,
  Indicator,
  Modal,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

interface FullProjectModalProps {
  opened: boolean;
  close: () => void;
  title: string;
  live?: boolean;
  image: string;
  technologies: string[];
  desc: string;
  github: string;
  link: string;
}

const FullProjectModal = ({
  opened,
  close,
  title,
  live,
  image,
  technologies,
  desc,
  github,
  link,
}: FullProjectModalProps) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 640px)");

  const badgeSize = isMobile ? "sm" : isSmall ? "md" : "lg";
  const btnSize = isMobile ? "xs" : isSmall ? "sm" : "md";
  const titleSize = isMobile ? "1.25rem" : isSmall ? "1.5rem" : "1.875rem";

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      centered
      opened={opened}
      onClose={close}
    >
      <Modal.Overlay blur={4} backgroundOpacity={0.6} />

      <Modal.Content className="!rounded-2xl !overflow-hidden">
        {/* Header */}
        <Modal.Header className="!bg-bgColor !border-2 !border-b-0 !border-primaryColor !rounded-t-2xl !px-5 !py-3">
          <Modal.Title
            data-autofocus
            className="!text-white !font-bold flex items-center gap-3 flex-wrap"
            style={{ fontSize: titleSize }}
          >
            {title}
            {live && (
              <Badge
                size={badgeSize}
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={8}
                    processing
                  />
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>

          <Modal.CloseButton
            size="md"
            iconSize="20px"
            className="!bg-transparent !text-red-400 hover:!text-red-300 transition-colors"
            aria-label="Close project modal"
          />
        </Modal.Header>

        <Modal.Body
          className="!bg-bgColor !border-2 !border-t-0 !border-primaryColor !rounded-b-2xl"
          style={{ padding: isMobile ? "8px" : "12px", paddingTop: "12px" }}
        >
          <Image
            className="!rounded-xl"
            style={{ boxShadow: "0 0 12px 0 #A78BFA44" }}
            src={image}
            alt={`${title} preview`}
          />

          <div className="flex flex-wrap gap-2 my-3">
            {technologies.map((tech: string, index: number) => (
              <Badge
                key={index}
                size={badgeSize}
                variant="light"
                color="#A78BFA"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Text
            className="!text-justify"
            style={{
              fontSize: isMobile ? "0.75rem" : isSmall ? "0.875rem" : "1rem",
            }}
            c="dimmed"
            mb="md"
          >
            {desc}
          </Text>

          <Group grow gap="sm" mb={4}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size={btnSize}
                  color="#A78BFA"
                  fullWidth
                  radius="md"
                  leftSection={<IconBrandGithub size={16} />}
                >
                  View Code
                </Button>
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <Button
                  size={btnSize}
                  color="#A78BFA"
                  className="!text-bgColor"
                  fullWidth
                  radius="md"
                  leftSection={<IconExternalLink size={16} />}
                >
                  View Live App
                </Button>
              </a>
            )}
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModal;
