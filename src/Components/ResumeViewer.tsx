import {
  ActionIcon,
  Modal,
  ScrollArea,
  Skeleton,
  Tooltip,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconArrowBigDownLineFilled,
  IconFileTypePdf,
} from "@tabler/icons-react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const RESUME_FILE = process.env.PUBLIC_URL + "/Resume.pdf";

const ResumeViewer = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageWidth, setPageWidth] = useState<number | undefined>(undefined);
  const isMobile = useMediaQuery("(max-width: 480px)");

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
            className="!text-white !font-bold flex items-center gap-3"
            style={{ fontSize: isMobile ? "1.25rem" : "1.75rem" }}
          >
            <IconFileTypePdf
              size={isMobile ? 20 : 28}
              className="text-primaryColor"
              aria-hidden
            />
            Resume
            <Tooltip
              label="Download Resume"
              color="#A78BFA"
              position="right"
              offset={6}
              withArrow
            >
              <ActionIcon
                component="a"
                href={RESUME_FILE}
                download={Info.name}
                variant="outline"
                color="#A78BFA"
                size={isMobile ? "sm" : "md"}
                aria-label="Download resume"
              >
                <IconArrowBigDownLineFilled
                  size={isMobile ? 14 : 18}
                  className="text-primaryColor"
                />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>

          <Modal.CloseButton
            size="md"
            iconSize="20px"
            className="!bg-transparent !text-red-400 hover:!text-red-300 transition-colors"
            aria-label="Close resume viewer"
          />
        </Modal.Header>

        {/* Body */}
        <Modal.Body
          className="!bg-bgColor !border-2 !border-t-0 !border-primaryColor !rounded-b-2xl"
          style={{ padding: isMobile ? "8px" : "12px" }}
        >
          {/* Loading skeleton */}
          {!isLoaded && (
            <Skeleton
              height={isMobile ? 420 : 680}
              width={isMobile ? 280 : 500}
              radius="md"
              animate
            />
          )}

          <Document
            file={RESUME_FILE}
            onLoadSuccess={() => setIsLoaded(true)}
            className={`!rounded-xl !overflow-hidden transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={pageWidth}
              onRenderSuccess={(page) => {
                if (!pageWidth) setPageWidth(isMobile ? 280 : undefined);
              }}
              className={`
                [&>.react-pdf__Page__canvas]:!rounded-xl
                md-mx:[&>.react-pdf__Page__canvas]:!w-full
                md-mx:[&>.react-pdf__Page__canvas]:!h-auto
              `}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
