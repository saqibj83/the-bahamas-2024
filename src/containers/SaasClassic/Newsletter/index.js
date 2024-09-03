import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Input from "common/components/Input";
import Select from "common/components/Select";
import Container from "common/components/UI/Container";
import "react-datepicker/dist/react-datepicker.css";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";
import { DOMAIN_NAMES } from "common/data/Hosting/data";

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {
  const [startDate, setStartDate] = useState(new Date("05/01/2024"));
  const [endDate, setEndDate] = useState(new Date("05/01/2024"));
  const [message, setmessage] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jm13zdw",
        "template_snk0woo",
        form.current,
        "FgtB5FqTc25g3XcAt"
      )
      .then(
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
    <Box
      {...sectionWrapper}
      as="section"
      id="join_section"
      style={{
        textAlign: "center",
        background:
          "url(https://cdn.triton-series.com/wp-content/uploads/2019/12/08151254/Triton-Live-Stream-Set_2023-Triton-Monte-Carlo-SHRS_EV01-200K-NLH-Invitational_Day-1_Giron_JG84640-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box style={{ paddingTop: "100px" }}>
          <Heading
            style={{
              marginBottom: "10px",
              paddingTop: "50px",
              fontSize: "60px",
            }}
            {...title}
            content="WANT TO JOIN THE ACTION? "
          />
        </Box>
        <NewsletterWrapper>
          <Box className="join">
            <p style={{ color: "#fff", fontSize: "22px" }}>
              Take your seat at the table by completing our player application
              form.
            </p>
            <div className="prime-cta">
              <Link
                href="https://triton-series.com/player-registration/"
                legacyBehavior
              >
                <a target="_blank">
                  <div className="primary-cta">REGISTER NOW</div>
                </a>
              </Link>
              <p className="small">*Terms & Conditions apply.</p>
            </div>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
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
  sectionWrapper: {
    backgroundColor: "#000",
    pb: "50px",
  },
  textArea: {
    mb: ["40px", "40px", "40px", "50px", "50px"],
    pr: ["0", "0", "0", "80px", "20px"],
  },
  title: {
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "center", "center"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["22px", "22px"],
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
