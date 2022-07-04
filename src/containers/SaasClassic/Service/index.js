import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { SERVICE_ITEMS } from "common/data/SaasClassic";

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {
  return (
    <SectionWrapper id="event_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content=" EVENT SCHEDULE
            "
          />
        </Box>

        <Box>
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
                  <h5>
                    Level <br className="non-mob" /> Time
                  </h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2:00 PM</td>
                <td>
                  Monday <br /> September <br className="non-mob" /> 05, 2022
                </td>
                <td>1</td>
                <td>
                  NLH - 8 <br className="non-mob" /> Handed
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Tuesday
                  <br /> September <br className="non-mob" /> 06, 2022
                </td>
                <td>2</td>
                <td>
                  NLH - 8 <br className="non-mob" /> Handed
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Tuesday
                  <br /> September <br className="non-mob" /> 06, 2022
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Wednesday
                  <br /> September <br className="non-mob" /> 07, 2022
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Wednesday
                  <br /> September <br className="non-mob" /> 07, 2022
                </td>
                <td>1</td>
                <td>NLH - 8 Handed</td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Thursday
                  <br /> September <br className="non-mob" /> 08, 2022
                </td>
                <td>2</td>
                <td>NLH - 8 Handed</td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Thursday
                  <br /> September <br className="non-mob" /> 08, 2022
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Friday
                  <br /> September <br className="non-mob" /> 09, 2022
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Friday
                  <br /> September <br className="non-mob" /> 09, 2022
                </td>
                <td>1</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Saturday
                  <br /> September <br className="non-mob" /> 10, 2022
                </td>
                <td>2</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Saturday
                  <br /> September <br className="non-mob" /> 10, 2022
                </td>
                <td>1</td>
                <td>Pot Limit Omaha</td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Sunday
                  <br /> September <br className="non-mob" /> 11, 2022
                </td>
                <td>FT</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Sunday
                  <br /> September <br className="non-mob" /> 11, 2022
                </td>
                <td>2</td>
                <td>Pot Limit Omaha</td>
                <td>$25,000</td>
                <td>200,000 </td>
                <td>30 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Sunday
                  <br /> September <br className="non-mob" /> 11, 2022
                </td>
                <td>1</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Monday
                  <br /> September <br className="non-mob" /> 12, 2022
                </td>
                <td>2</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Monday
                  <br /> September <br className="non-mob" /> 12, 2022
                </td>
                <td>SINGLE</td>
                <td>NLH - TURBO</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>20 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Tuesday
                  <br /> September <br className="non-mob" /> 13, 2022
                </td>
                <td>FT</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Minutes</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Tuesday
                  <br /> September <br className="non-mob" /> 13, 2022
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Wednesday
                  <br /> September <br className="non-mob" /> 14, 2022
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Wednesday
                  <br /> September <br className="non-mob" /> 14, 2022
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Thursday
                  <br /> September <br className="non-mob" /> 15, 2022
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Minutes</td>
              </tr>
              <tr>
                <td>4:00 PM</td>
                <td>
                  Thursday
                  <br /> September <br className="non-mob" /> 15, 2022
                </td>
                <td>1</td>
                <td>SD - Main Event</td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Friday
                  <br /> September <br className="non-mob" /> 16, 2022
                </td>
                <td>2</td>
                <td>SD - Main Event</td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Minutes</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Friday
                  <br /> September <br className="non-mob" /> 16, 2022
                </td>
                <td>1</td>
                <td>Short Deck Ante-Only</td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Minutes</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>
                  Saturday
                  <br /> September <br className="non-mob" /> 17, 2022
                </td>
                <td>2</td>
                <td>Short Deck Ante-Only</td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Minutes</td>
              </tr>
              <tr>
                <td>3:00 PM</td>
                <td>
                  Saturday
                  <br /> September <br className="non-mob" /> 17, 2022
                </td>
                <td>SINGLE</td>
                <td>Short Deck Ante-Only - TURBO</td>
                <td>$25,000</td>
                <td>100,000 x3</td>
                <td>20 Minutes</td>
              </tr>
            </tbody>
          </table>
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
    color: "#e29821",
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
