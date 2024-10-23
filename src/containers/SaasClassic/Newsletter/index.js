import emailjs from "@emailjs/browser";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import Button from "common/components/Button";
import { RulesBackground } from "common/components/RulesBackground";
import NewsletterWrapper from "./newsletter.style";

const Newsletter = ({ sectionWrapper, textArea, buttonArea, buttonStyle, title, description }) => {
  const [startDate, setStartDate] = useState(new Date("05/01/2024"));
  const [endDate, setEndDate] = useState(new Date("05/01/2024"));
  const [message, setmessage] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jm13zdw", "template_snk0woo", form.current, "FgtB5FqTc25g3XcAt").then(
      (result) => {
        console.log(result.text);
        setmessage("Request Submited Successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
  };

  return (
    <NewsletterWrapper>
      <RulesBackground className={"bg"} bgGradient={false}>
        <Box {...sectionWrapper} as="section" className="mt-10" id="join_section" style={{}}>
          <Container className=" py-12">
            <Box>
              <Heading {...title} className="!mb-2 " content="WANT TO JOIN THE ACTION? " />
            </Box>
            <Box className="join">
              <p className="text-foreground font-bold text-center">
                Take your seat at the table by completing our player application form.
              </p>
              <div className="prime-cta mt-5">
                <Link href="https://triton-series.com/player-registration/" legacyBehavior>
                  <a target="_blank">
                    <Button
                      title="REGISTER NOW"
                      className="!w-[270px] !max-w-[90vw] !font-bold"
                    ></Button>
                  </a>
                </Link>
                <p className="small">*Terms & Conditions apply</p>
              </div>
            </Box>
          </Container>
        </Box>
      </RulesBackground>
    </NewsletterWrapper>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    pr: ["0", "0", "0", "80px", "20px"],
  },
  title: {
    fontSize: ["20px", "24px", "36px"],
    fontWeight: "700",
    color: "#fff",
    lineHeight: "1.34",
    textAlign: ["center", "center", "center", "center", "center"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "submit",
    fontSize: "18px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    color: "#fff",
    backgroundColor: "#000",
  },
};

export default Newsletter;
