import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import { SERVICE_ITEMS } from "common/data/SaasClassic";
import Event1 from "common/assets/image/booklet/event-1.png";
import Event2 from "common/assets/image/booklet/event-2.png";
import Event3 from "common/assets/image/booklet/event-3.png";
import Event5 from "common/assets/image/booklet/event-5.png";
import Event6 from "common/assets/image/booklet/event-6.png";
import Event7 from "common/assets/image/booklet/event-7.png";
import Event8 from "common/assets/image/booklet/event-8.png";
import Event9 from "common/assets/image/booklet/event-9.png";
import Event10 from "common/assets/image/booklet/event-10.png";
import Event11 from "common/assets/image/booklet/event-11.png";
import Event12 from "common/assets/image/booklet/event-12.png";
import Event13 from "common/assets/image/booklet/event-13.png";
import Event15 from "common/assets/image/booklet/event-15.png";
import Event16 from "common/assets/image/booklet/event-16.png";
import Event17 from "common/assets/image/booklet/event-17.png";
import Coin from "common/assets/image/saasClassic/luxon.png";

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={
      <svg
        height="22px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="22px"
        style={{ transform: "rotate(45deg)" }}
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>
    }
  />
);
const EventOne = () => <NextImage src={Event1} alt="Event - 1" />;
const EventTwo = () => <NextImage src={Event2} alt="Event - 2" />;
const EventThree = () => <NextImage src={Event3} alt="Event - 3" />;
const EventFive = () => <NextImage src={Event5} alt="Event - 5" />;
const EventSix = () => <NextImage src={Event6} alt="Event - 6" />;
const EventSeven = () => <NextImage src={Event7} alt="Event - 7" />;
const EventEight = () => <NextImage src={Event8} alt="Event - 8" />;
const EventNine = () => <NextImage src={Event9} alt="Event - 9" />;
const EventTen = () => <NextImage src={Event10} alt="Event - 10" />;
const EventEleven = () => <NextImage src={Event11} alt="Event - 11" />;
const EventTwelve = () => <NextImage src={Event12} alt="Event - 12" />;
const EventThirteen = () => <NextImage src={Event13} alt="Event - 13" />;
const EventFifteen = () => <NextImage src={Event15} alt="Event - 15 " />;
const EventSixteen = () => <NextImage src={Event16} alt="Event - 16 " />;
const EventSeventeen = () => <NextImage src={Event17} alt="Event - 17 " />;

const ServiceSection = ({ secTitleWrapper, secHeading }) => {
  // modal handler
  const EventModal1 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventOne,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal2 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTwo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal3 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventThree,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal5 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventFive,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal6 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSix,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal7 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSeven,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  const EventModal8 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventEight,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal9 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventNine,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal10 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal11 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventEleven,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal12 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTwelve,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal13 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventThirteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal15 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventFifteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal16 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSixteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  const EventModal17 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSeventeen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="event_section">
      <Container>
        {/* <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content=" EVENT SCHEDULE
            "
          />
        </Box> */}
        <Box>
          <div className="prime-cta" style={{ marginTop: "-40px" }}>
            <Link
              href="https://london-invitational.triton-series.com/"
              legacyBehavior
            >
              <a target="_blank">
                <NextImage
                  className="img-cta"
                  style={{ cursor: "pointer", display: "inline" }}
                  src={Coin}
                  alt="Event - 1"
                />
              </a>
            </Link>
          </div>
        </Box>
        <Box>
          <div className="prime-cta">
            <Link
              href="https://london-invitational.triton-series.com/"
              legacyBehavior
            >
              <a target="_blank">
                <Button
                  title="LUXON INVITATIONAL HOMEPAGE"
                  className="primary-cta"
                />
              </a>
            </Link>
          </div>
        </Box>
        {/* <Box className="non-desktop">
          <table className="tble">
            <thead>
              <tr>
                <th>
                  <h5>Time</h5>
                </th>
                <th>
                  <h5>Date</h5>
                </th>
                <th>
                  <h5>Day</h5>
                </th>
                <th>
                  <h5>Event</h5>
                </th>
                <th>
                  <h5>Buy-in</h5>
                </th>
                <th>
                  <h5>Stack</h5>
                </th>
                <th>
                  <h5>Level Time</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Thursday <br /> 27 July 2023
                </td>
                <td>1</td>
                <td>#1 GG Super Million$ Live</td>
                <td>£20,000</td>
                <td>250,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Friday <br /> 28 July 2023
                </td>
                <td>2</td>
                <td>#1 GG Super Million$ Live</td>
                <td>£20,000</td>
                <td>250,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Friday <br /> 28 July 2023
                </td>
                <td>1</td>
                <td>#2 NLH - 7 Handed</td>
                <td>£20,000</td>
                <td>200,000</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Saturday <br /> 29 July 2023
                </td>
                <td>2</td>
                <td>#2 NLH - 7 Handed</td>
                <td>£20,000</td>
                <td>200,000</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Saturday <br /> 29 July 2023
                </td>
                <td>1</td>
                <td>#3 NLH - 7 Handed - Mystery Bounty</td>
                <td>£30,000</td>
                <td>200,000</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Sunday <br /> 30 July 2023
                </td>
                <td>2</td>
                <td>#3 NLH - 7 Handed - Mystery Bounty</td>
                <td>£30,000</td>
                <td>200,000</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Sunday <br /> 30 July 2023
                </td>
                <td>1</td>
                <td>#5 NLH - 8 Handed</td>
                <td>£40,000</td>
                <td>200,000</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Monday <br /> 31 July 2023
                </td>
                <td>2</td>
                <td>#5 NLH - 8 Handed</td>
                <td>£40,000</td>
                <td>200,000</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Monday <br /> 31 July 2023
                </td>
                <td>1</td>
                <td>#6 NLH - 7 Handed</td>
                <td>£50,000</td>
                <td>200,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  Tuesday <br /> 1 August 2023
                </td>
                <td>2</td>
                <td>#6 NLH - 7 Handed</td>
                <td>£50,000</td>
                <td>200,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Tuesday <br /> 1 August 2023
                </td>
                <td>1</td>
                <td>#7 NLH - 8 Handed</td>
                <td>£150,000</td>
                <td>200,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Wednesday <br /> 2 August 2023
                </td>
                <td>2</td>
                <td>#7 NLH - 8 Handed</td>
                <td>£150,000</td>
                <td>200,000</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Wednesday <br /> 2 August 2023
                </td>
                <td>SINGLE</td>
                <td>#8 NLH - TURBO (5k Bounty)</td>
                <td>£25,000</td>
                <td>200,000</td>
                <td>20 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Thursday <br /> 3 August 2023
                </td>
                <td>1</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200,000</td>
                <td>300,000</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Friday <br /> 4 August 2023
                </td>
                <td>2</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200,000</td>
                <td>300,000</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Friday <br /> 4 August 2023
                </td>
                <td>1</td>
                <td>#10 Pot Limit Omaha</td>
                <td>£20,000</td>
                <td>200,000</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Saturday <br /> 5 August 2023
                </td>
                <td>FT</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200,000</td>
                <td>300,000</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Saturday <br /> 5 August 2023
                </td>
                <td>2</td>
                <td>#10 Pot Limit Omaha</td>
                <td>£20,000</td>
                <td>200,000</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Saturday <br /> 5 August 2023
                </td>
                <td>1</td>
                <td>#11 NLH - Main Event</td>
                <td>£100,000</td>
                <td>250,000</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Sunday <br /> 6 August 2023
                </td>
                <td>2</td>
                <td>#11 NLH - Main Event</td>
                <td>£100,000</td>
                <td>250,000</td>
                <td>50 MIN</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Sunday <br /> 6 August 2023
                </td>
                <td>SINGLE</td>
                <td>#12 NLH - TURBO</td>
                <td>£50,000</td>
                <td>200,000</td>
                <td>20 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Monday <br /> 7 August 2023
                </td>
                <td>FT</td>
                <td>#11 NLH - Main Event</td>
                <td>£100,000</td>
                <td>250,000</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Monday <br /> 7 August 2023
                </td>
                <td>1</td>
                <td>#13 NLH - 8-Handed</td>
                <td>£50,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Tuesday <br /> 8 August 2023
                </td>
                <td>2</td>
                <td>#13 NLH - 8-Handed</td>
                <td>£50,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Tuesday <br /> 8 August 2023
                </td>
                <td>1</td>
                <td>#15 Short Deck Ante-Only</td>
                <td>£25,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x2</span>
                </td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Wednesday <br /> 9 August 2023
                </td>
                <td>2</td>
                <td>#15 Short Deck Ante-Only</td>
                <td>£25,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x2</span>
                </td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Wednesday <br /> 9 August 2023
                </td>
                <td>1</td>
                <td>#16 SD - Main Event</td>
                <td>£50,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>45 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Thursday <br /> 10 August 2023
                </td>
                <td>2</td>
                <td>#16 SD - Main Event</td>
                <td>£50,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>45 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Thursday <br /> 10 August 2023
                </td>
                <td>SINGLE</td>
                <td>#17 Short Deck Ante-Only</td>
                <td>£20,000</td>
                <td>
                  100,000 <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>25 MIN</td>
              </tr>
            </tbody>
          </table>
        </Box> */}

        {/* <Box className="non-mobile">
          <table>
            <thead>
              <tr>
                <th>
                  <h5>Time</h5>
                </th>
                <th>
                  <h5>Date</h5>
                </th>
                <th>
                  <h5>DAY</h5>
                </th>
                <th>
                  <h5>Event</h5>
                </th>
                <th>
                  <h5>Buy-in</h5>
                </th>
                <th>
                  <h5>Stack</h5>
                </th>
                <th>
                  <h5>Level Time</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:00 PM</td>
                <td>
                  THU <br /> 27 July
                </td>
                <td>1</td>
                <td>#1 GG Super Million$ Live</td>
                <td>£20K</td>
                <td>250K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  FRI <br /> 28 July
                </td>
                <td>2</td>
                <td>#1 GG Super Million$ Live</td>
                <td>£20K</td>
                <td>250K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  FRI <br /> 28 July
                </td>
                <td>1</td>
                <td>#2 NLH - 7 Handed</td>
                <td>£20K</td>
                <td>200K</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  SAT <br /> 29 July
                </td>
                <td>2</td>
                <td>#2 NLH - 7 Handed</td>
                <td>£20K</td>
                <td>200K</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  SAT <br /> 29 July
                </td>
                <td>1</td>
                <td>#3 NLH - 7 Handed - Mystery Bounty</td>
                <td>£30K</td>
                <td>200K</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  SUN <br /> 30 July
                </td>
                <td>2</td>
                <td>#3 NLH - 7 Handed - Mystery Bounty</td>
                <td>£30K</td>
                <td>200K</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  SUN <br /> 30 July
                </td>
                <td>1</td>
                <td>#5 NLH - 8 Handed</td>
                <td>£40K</td>
                <td>200K</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  MON <br /> 31 July
                </td>
                <td>2</td>
                <td>#5 NLH - 8 Handed</td>
                <td>£40K</td>
                <td>200K</td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  MON <br /> 31 July
                </td>
                <td>1</td>
                <td>#6 NLH - 7 Handed</td>
                <td>£50K</td>
                <td>200K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  TUE <br /> 1 August
                </td>
                <td>2</td>
                <td>#6 NLH - 7 Handed</td>
                <td>£50K</td>
                <td>200K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  TUE <br /> 1 August
                </td>
                <td>1</td>
                <td>#7 NLH - 8 Handed</td>
                <td>£150K</td>
                <td>200K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  WED <br /> 2 August
                </td>
                <td>2</td>
                <td>#7 NLH - 8 Handed</td>
                <td>£150K</td>
                <td>200K</td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  WED <br /> 2 August
                </td>
                <td>SINGLE</td>
                <td>#8 NLH - TURBO (5k Bounty)</td>
                <td>£25K</td>
                <td>200K</td>
                <td>20 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  THU <br /> 3 August
                </td>
                <td>1</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200K</td>
                <td>300K</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  FRI <br /> 4 August
                </td>
                <td>2</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200K</td>
                <td>300K</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  FRI <br /> 4 August
                </td>
                <td>1</td>
                <td>#10 Pot Limit Omaha</td>
                <td>£20K</td>
                <td>200K</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  SAT <br /> 5 August
                </td>
                <td>FT</td>
                <td>#9 NLH - Invitational Event</td>
                <td>£200K</td>
                <td>300K</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  SAT <br /> 5 August
                </td>
                <td>2</td>
                <td>#10 Pot Limit Omaha</td>
                <td>£20K</td>
                <td>200K</td>
                <td>30 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  SAT <br /> 5 August
                </td>
                <td>1</td>
                <td>#11 NLH - Main Event</td>
                <td>£100K</td>
                <td>250K</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  SUN <br /> 6 August
                </td>
                <td>2</td>
                <td>#11 NLH - Main Event</td>
                <td>£100K</td>
                <td>250K</td>
                <td>50 MIN</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  SUN <br /> 6 August
                </td>
                <td>SINGLE</td>
                <td>#12 NLH - TURBO</td>
                <td>£50K</td>
                <td>200K</td>
                <td>20 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  MON <br /> 7 August
                </td>
                <td>FT</td>
                <td>#11 NLH - Main Event</td>
                <td>£100K</td>
                <td>250K</td>
                <td>50 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  MON <br /> 7 August
                </td>
                <td>1</td>
                <td>#13 NLH - 8-Handed</td>
                <td>£50K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  TUE <br /> 8 August
                </td>
                <td>2</td>
                <td>#13 NLH - 8-Handed</td>
                <td>£50K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>40 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  TUE <br /> 8 August
                </td>
                <td>1</td>
                <td>#15 Short Deck Ante-Only </td>
                <td>£25K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x2</span>
                </td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  WED <br /> 9 August
                </td>
                <td>2</td>
                <td>#15 Short Deck Ante-Only </td>
                <td>£25K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x2</span>
                </td>
                <td>35 MIN </td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  WED <br /> 9 August
                </td>
                <td>1</td>
                <td>#16 SD - Main Event</td>
                <td>£50K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>45 MIN </td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  THU <br /> 10 August
                </td>
                <td>2</td>
                <td>#16 SD - Main Event</td>
                <td>£50K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>45 MIN </td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  THU <br /> 10 August
                </td>
                <td>SINGLE</td>
                <td>#17 Short Deck Ante-Only</td>
                <td>£20K</td>
                <td>
                  100K <span style={{ textTransform: "lowercase" }}>x3</span>
                </td>
                <td>25 MIN</td>
              </tr>
            </tbody>
          </table>
        </Box> */}
        <Box>
          {/* <div className="prime-cta">
            <div className="primary-cta" style={{ marginTop: "10px" }}>
              DOWNLOAD TOURNAMENT STRUCTURES
            </div>
            <span class="tooltiptext">Coming Soon</span>
            <Link
              href="https://cdn.triton-series.com/wp-content/uploads/2019/12/19175313/Cyprus-Event-Structure.pdf"
              legacyBehavior
            >
              <a target="_blank">
                <div className="primary-cta" style={{ marginTop: "10px" }}>
                  TOURNAMENT STRUCTURES
                </div>
              </a>
            </Link>
            <Link
              href="https://triton-series.com/tournament-rules/"
              legacyBehavior
            >
              <a target="_blank">
                <div className="primary-cta" style={{ marginTop: "10px" }}>
                  TOURNAMENT RULES
                </div>
              </a>
            </Link>
          </div> */}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
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
    color: "#EBA800",
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
    width: "540px",
    maxWidth: "100%",
  },
  Row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: ["0", "-15px", "-20px", "-35px", "-35px"],
    mr: ["0", "-15px", "-20px", "-35px", "-35px"],
  },
  Col: {
    pl: ["15px", "15px", "25x", "35px", "35px"],
    pr: ["15px", "15px", "25px", "35px", "35px"],
    mb: "40px",
  },
  serviceTitleStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "17px"],
    fontWeight: "500",
    color: "#ff4361",
    mb: 0,
  },
  secDes: {
    fontSize: ["14px", "15px", "16px"],
    color: "#5d646d",
    lineHeight: "1.875",
    mt: "30px",
    ml: "auto",
    mr: "auto",
    width: "470px",
    maxWidth: "100%",
    textAlign: "center",
  },
};

export default ServiceSection;
