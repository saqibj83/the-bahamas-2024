import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionTitle,
} from "common/components/Accordion";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";

import { FaqWrapper } from "../Faq/faq.style";

import SectionWrapper from "./updateScreen.style";
import { border } from "styled-system";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="venue">
      <Container width={1050}>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            className="!text-primary"
            content="Event Venue"
          />
        </Box>

        <Box style={{ border: "5px solid #dfa95a" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.533768821618!2d-77.3237729244081!3d25.083786736284516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7da4cf39538f%3A0x6a76b269857686d4!2sAtlantis%20Paradise%20Island%20Bahamas!5e0!3m2!1sen!2smy!4v1732158236567!5m2!1sen!2smy"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["20px", "22px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "100%",
    maxWidth: "100%",
  },
};

export default UpdateScreen;
