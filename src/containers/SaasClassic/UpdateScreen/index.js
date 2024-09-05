import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "common/components/Accordion";
import { plus } from "react-icons-kit/entypo/plus";
import { minus } from "react-icons-kit/entypo/minus";

import { FAQ_DATA } from "common/data/SassMinimal";

import { FaqWrapper } from "../Faq/faq.style";
import Button from "common/components/Button";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading, button }) => {
  return (
    <SectionWrapper id="venue">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="Event Venue and Accommodation" />
        </Box>
        <Tabs className="update-screen-tab">
          <TabPane tab="Venue" key="1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2273527023285!2d7.43519157669217!3d43.74737537109779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc28787641953%3A0x86d104ab1fa681b!2sMonte-Carlo%20Sporting%20%2F%20Salle%20Des%20%C3%89toiles!5e0!3m2!1sen!2s!4v1694424977740!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </TabPane>
          <TabPane tab="Accommodation" key="2">
            <ul>
              <li>
                Arrival: 31<sup>st</sup> of October 2024
              </li>
              <li>
                Departure: 15<sup>th</sup> of November 2024
              </li>
              <li>Accommodation: Monte-Carlo Bay Hotel & Resort</li>
              <li>
                <Link
                  href="https://triton-series.com/accommodation-monte-carlo-2024-en/"
                  legacyBehavior
                >
                  <a target="_blank">EN - Hotel Promo T&C</a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://triton-series.com/accommodation-monte-carlo-2024-cn/"
                  legacyBehavior
                >
                  <a target="_blank">CN - Hotel Promo T&C</a>
                </Link>
              </li>
            </ul>
          </TabPane>

          <TabPane tab="Faq" key="4">
            <FaqWrapper id="faq_section">
              <Accordion>
                <AccordionItem
                  className="accordion_item"
                  key="1"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="What are the visa requirements for entering Monaco?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        Information on visa requirements can be found on&nbsp;
                        <a
                          href="https://ambassade-en-france.gouv.mc/en/information-and-services/visiting-monaco"
                          target="_blank"
                        >
                          this website
                        </a>
                      </li>
                      <li>
                        Nationals of the European Economic Area do not require a
                        visa to enter Monaco.
                      </li>
                      <li>
                        Nationals of countries outside the European Economic
                        Area may be required to acquire a valid Schengen visa.
                        Kindly consult your respective embassy for specific
                        requirements.
                      </li>
                      <li>
                        Triton Poker Series is pleased to provide personalized
                        invitations for visa purposes upon request.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="2"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="Where is the nearest airport to Monte Carlo Bay Hotel & Resort / Sporting Monte Carlo?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        <strong> Nice Côte d'Azur Airport (NCE)</strong> is the
                        nearest airport, approximately 50 minutes drive from
                        Monte Carlo Bay Hotel & Resort / Sporting Monte Carlo.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="3"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="How do I get to Monte Carlo Bay Hotel & Resort from the airport?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        {" "}
                        <strong>Private Transfer:</strong> We offer private
                        airport transfer services. For further assistance,
                        please contact our Event Concierge Team at{" "}
                        <a href="mailto:concierge@triton-series.com">
                          concierge@triton-series.com
                        </a>
                        or Whatsapp at +60125119615.
                      </li>
                      <li>
                        {" "}
                        <strong>Taxi:</strong> Taxi ranks are conveniently
                        located outside Terminals 1 and 2 at Nice Airport, and
                        taxis are available 24 hours a day. A one-way transfer
                        from the airport to Monaco would cost between €90 -
                        €100.
                      </li>
                      <li>
                        <strong>Ride-hailing App (Uber): </strong>Use the app
                        and head to the Kiss-and-Fly section of the terminal,
                        where your ride will be waiting. Note that Uber is only
                        available one way (Nice to Monaco). Once in Monaco, Uber
                        service is unavailable (Monaco to Nice).
                      </li>
                      <li>
                        <strong>Bus and Tram:</strong> The tram and bus
                        combination is a cost-effective and eco-friendly option.
                        First, take Tram 2 from Nice Airport to Nice Port,
                        followed by Bus Number 100 to Monaco. This option costs
                        €3 and takes approximately 1 hour and 45 minutes.
                      </li>
                      <li>
                        <strong>Helicopter:</strong> Many service providers
                        offer helicopter transfers between Nice Côte d’Azur
                        Airport (NCE) and the hotel. Players are advised to make
                        their arrangements.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="4"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="How do I book accommodation at the Monte Carlo Bay Hotel & Resort?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        We offer preferential rates and complimentary
                        accommodation promos for players who confirm their
                        participation. For booking and further information,
                        please contact our Event Concierge Team at &nbsp;
                        <a href="mailto:concierge@triton-series.com ">
                          concierge@triton-series.com
                        </a>
                        &nbsp; or Whatsapp at +60125119615.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="5"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="Is accommodation complimentary for players?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        We offer complimentary accommodation promos to players
                        subject to terms and conditions. Information can be
                        found&nbsp;
                        <a
                          href="https://triton-series.com/accommodation-monte-carlo-2024-en/"
                          target="_blank"
                        >
                          here
                        </a>
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="6"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="Monte Carlo Bay Hotel & Resort has run out of rooms; where else can I stay?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        Le Méridien Beach Plaza is an excellent option for a
                        stay as it is conveniently located 350m from the
                        Sporting Monte Carlo, which is about a 5-minute walk.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="06"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="How do I register for the tournaments?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        For first-time players, please fill out{" "}
                        <a
                          href="https://triton-series.com/player-registration/"
                          target="_blank"
                          rel="noopener"
                        >
                          <b>this registration form</b>
                        </a>{" "}
                        to be added to the Triton Player Database. Once in the
                        database, one of our Triton Concierge Team members will
                        contact you to provide further information on buy-ins,
                        payouts, and other services.
                      </li>
                      <li>
                        For returning players, you may contact the Triton
                        Concierge Team members assigned to you directly for
                        further information on buy-ins, payouts, and other
                        services.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem
                  className="accordion_item"
                  key="7"
                  expanded="expend"
                >
                  <AccordionTitle className="accordion_title">
                    <>
                      <Heading content="Where can I find the tournament schedule and structures?" />
                      <IconWrapper>
                        <OpenIcon className="openIcon">
                          <Icon icon={minus} size={18} />
                        </OpenIcon>
                        <CloseIcon className="closeIcon">
                          <Icon icon={plus} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </>
                  </AccordionTitle>
                  <AccordionBody className="accordion_body">
                    <ul>
                      <li>
                        You may find the tournament schedule and
                        structures&nbsp;
                        <a href="/#event_section" rel="noopener">
                          <b>here</b>
                        </a>
                        &nbsp;or download the PDF version{" "}
                        <a href="#" target="_blank" rel="noopener">
                          <b>here</b>
                        </a>
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </FaqWrapper>
          </TabPane>
        </Tabs>
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
    mb: ["60px", "80px"],
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
    color: "#fff",
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
