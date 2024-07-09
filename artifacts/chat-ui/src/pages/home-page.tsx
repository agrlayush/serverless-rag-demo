import {
  Container,
  ContentLayout,
  Box, Grid, ColumnLayout, SpaceBetween, Link
} from "@cloudscape-design/components";

export default function HomePage() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={mode =>
        `center center/cover url("/images/header.png")`
      }
      header={
        <Box padding={{ vertical: "xxxl" }}>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, s: 8 } }
            ]}
          >
            <Container>
              <Box padding="s">
                <Box
                  fontSize="display-l"
                  fontWeight="bold"
                  variant="h1"
                  padding="n"
                >
                  Serverless Rag Demo
                </Box>
                <Box
                  fontSize="display-l"
                  fontWeight="light"
                >
                  Seamless Serverless AI for Effortless Innovation
                </Box>
                <Box
                  variant="p"
                  color="text-body-secondary"
                  margin={{ top: "xs", bottom: "l" }}
                >
                  A fully managed serverless generative AI solution for various use cases, including Retrieval Augmented Generation, Sentiment Analysis, OCR, and Multi-Agent systems.
                </Box>
              </Box>
            </Container>
          </Grid>
        </Box>
      }
    >
      <SpaceBetween size="xxl">
        <Box>&nbsp;</Box>
        <Container>
          <ColumnLayout borders="vertical" columns={4}>
            <div>
              <Box variant="h3">Document Chat</Box>
              <Box variant="p">Retrieval Augmented Generation Solution</Box>
            </div>
            <div>
              <Box variant="h3">Multi Agent</Box>
              <Box variant="p">This solution comprises of multiple-generative AI agents working in tandem to solve a user-problem</Box>
            </div>
            <div>
              <Box variant="h3">Sentiment Analysis</Box>
              <Box variant="p"></Box>
            </div>
            <div>
              <Box variant="h3">OCR</Box>
              <Box variant="p"></Box>
            </div>
          </ColumnLayout>
        </Container>

        <Container
      media={{
        content: (
          <img
            src="/images/document-chat.png"
            alt="placeholder"
          />
        ),
        position: "side",
        width: "14%"
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="#/document-chat">
              Document Chat
            </Link>
          </Box>
        </SpaceBetween>
        <Box variant="p">
          This is a paragraph. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut luctus tempor
          dolor ac accumsan. This is a paragraph. Lorem
          ipsum dolor sit amet, consectetur adipiscing
          elit. Ut luctus tempor dolor ac accumsan.
        </Box>
      </SpaceBetween>
    </Container>


    <Container
      media={{
        content: (
          <img
            src="/images/multi-agent.png"
            alt="placeholder"
          />
        ),
        position: "side",
        width: "14%"
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="#/multi-agent">
              Multi-Agent
            </Link>
          </Box>
        </SpaceBetween>
        <Box variant="p">
          This is a paragraph. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut luctus tempor
          dolor ac accumsan. This is a paragraph. Lorem
          ipsum dolor sit amet, consectetur adipiscing
          elit. Ut luctus tempor dolor ac accumsan.
        </Box>
      </SpaceBetween>
    </Container>



    <Container
      media={{
        content: (
          <img
            src="/images/sentiment.png"
            alt="placeholder"
          />
        ),
        position: "side",
        width: "14%"
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="#/sentiment-analysis">
              Sentiment Analysis
            </Link>
          </Box>
        </SpaceBetween>
        <Box variant="p">
          This is a paragraph. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut luctus tempor
          dolor ac accumsan. This is a paragraph. Lorem
          ipsum dolor sit amet, consectetur adipiscing
          elit. Ut luctus tempor dolor ac accumsan.
        </Box>
      </SpaceBetween>
    </Container>



    <Container
      media={{
        content: (
          <img
            src="/images/ocr.png"
            alt="placeholder"
          />
        ),
        position: "side",
        width: "14%"
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="#/ocr">
              OCR
            </Link>
          </Box>
        </SpaceBetween>
        <Box variant="p">
          This is a paragraph. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut luctus tempor
          dolor ac accumsan. This is a paragraph. Lorem
          ipsum dolor sit amet, consectetur adipiscing
          elit. Ut luctus tempor dolor ac accumsan.
        </Box>
      </SpaceBetween>
    </Container>


      </SpaceBetween>

    </ContentLayout>
  );
}