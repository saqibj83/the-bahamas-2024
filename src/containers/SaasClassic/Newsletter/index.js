import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
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
  const [startDate, setStartDate] = useState(new Date("10/01/2024"));
  const [endDate, setEndDate] = useState(new Date("10/01/2024"));
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
    <Box {...sectionWrapper} as="section" id="join_section">
      <Container>
        <Box style={{ paddingTop: "100px" }}>
          <Heading
            style={{ marginBottom: "80px" }}
            {...title}
            content="WANT TO JOIN THE ACTION? 
"
          />
        </Box>
        <NewsletterWrapper>
          <form ref={form} onSubmit={sendEmail}>
            <Box {...textArea}>
              <ContactFormWrapper>
                <Container>
                  <Input
                    inputType="text"
                    label="NAME"
                    iconPosition="right"
                    isMaterial={true}
                    className="email_input"
                    required
                  />
                  <Input
                    inputType="text"
                    label="AGE"
                    iconPosition="right"
                    isMaterial={true}
                    className="email_input"
                    required
                  />
                  <Box>
                    {" "}
                    <label htmlFor="">MESSAGE</label>
                  </Box>
                  <textarea
                    name="message"
                    label="Message"
                    cols="40"
                    rows="5"
                    class="email_input"
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      background: "transparent",
                      border: "1px solid #514f50",
                    }}
                  ></textarea>
                </Container>
              </ContactFormWrapper>
            </Box>
            <Box {...buttonArea}>
              <ContactFormWrapper>
                <Container>
                  <Input
                    inputType="email"
                    label="EMAIL"
                    iconPosition="right"
                    isMaterial={true}
                    className="email_input emil"
                    required
                  />
                  <Select
                    options={DOMAIN_NAMES}
                    placeholder="Event To Join"
                    className="domain_search_select"
                    aria-label="select options"
                    name="event"
                  />
                  <Input
                    inputType="text"
                    label="REFERRAL"
                    iconPosition="right"
                    isMaterial={true}
                    className="email_input"
                    style={{ marginTop: "40px" }}
                  />
                  <Box>
                    {" "}
                    <label htmlFor="">LENGTH OF STAY*</label>
                  </Box>
                  <DatePicker
                    selected={startDate}
                    name="start_date"
                    className="date_input"
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <span className="to">To</span>

                  <DatePicker
                    selected={endDate}
                    name="end_date"
                    className="date_input"
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                  <Box>
                    <div
                      style={{
                        color: "#EBA800",
                        color: "rgb(235, 168, 0)",
                        marginBottom: "0px",
                        fontWeight: "700",
                      }}
                    >
                      {message}
                    </div>
                    <Button
                      {...buttonStyle}
                      title="Send    "
                      style={{ marginTop: "30px", background: "#000" }}
                    />
                  </Box>
                </Container>
              </ContactFormWrapper>
            </Box>
          </form>
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
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
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
