import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: String;
  email: String;
  umessage: String;
}

export const EmailTemplate = ({
  name,
  email,
  umessage,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>A message from {name as string}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Message from {name}</Text>
        <Text style={paragraph}>{umessage}</Text>
        <Section style={btnContainer}>
          <Button style={button} href={`mailto:${email}`}>
            Reply
          </Button>
        </Section>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
