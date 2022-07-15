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
        <Box className="non-desktop">
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
                  <h5>Level Time</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 PM</td>
                <td>
                  Monday <br /> 5 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - 8 Handed</td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>TBC </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tuesday <br /> 6 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - 8 Handed</td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>TBC </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Tuesday <br /> 6 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wednesday <br /> 7 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Wednesday <br /> 7 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thursday <br /> 8 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Thursday <br /> 8 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - 8 Handed</td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Friday <br /> 9 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - 8 Handed</td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>2 PM</td>
                <td>
                  Saturday <br /> 10 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sunday <br /> 11 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Sunday <br /> 11 Sep, 2022
                </td>
                <td>1</td>
                <td>Pot Limit Omaha</td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>FT</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>2</td>
                <td>Pot Limit Omaha</td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>1</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tuesday <br /> 13 Sep, 2022
                </td>
                <td>2</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Tuesday <br /> 13 Sep, 2022
                </td>
                <td>SINGLE</td>
                <td>NLH - TURBO</td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>20 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wednesday <br /> 14 Sep, 2022
                </td>
                <td>FT</td>
                <td>NLH - Main Event</td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Wednesday <br /> 14 Sep, 2022
                </td>
                <td>1</td>
                <td>Short Deck Ante-Only</td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thursday <br /> 15 Sep, 2022
                </td>
                <td>2</td>
                <td>Short Deck Ante-Only</td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Thursday <br /> 15 Sep, 2022
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Friday <br /> 16 Sep, 2022
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Friday <br /> 16 Sep, 2022
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Saturday <br /> 17 Sep, 2022
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Saturday <br /> 17 Sep, 2022
                </td>
                <td>1</td>
                <td>SD - Main Event</td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sunday <br /> 18 Sep, 2022
                </td>
                <td>2</td>
                <td>SD - Main Event</td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Sunday <br /> 18 Sep, 2022
                </td>
                <td>1</td>
                <td>Short Deck Ante-Only</td>
                <td>$25,000</td>
                <td>100,000 x3</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 19 Sep, 2022
                </td>
                <td>FT</td>
                <td>SD - Main Event</td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Monday <br /> 19 Sep, 2022
                </td>
                <td>2</td>
                <td>Short Deck Ante-Only</td>
                <td>$25,000</td>
                <td>100,000 x3</td>
                <td>30 Min</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Box className="non-mobile">
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
                  <h5>
                    Day <br />
                  </h5>
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
                <td>2PM</td>
                <td>
                  Mon <br /> 5 Sep
                </td>
                <td>1</td>
                <td>NLH - 8 Handed</td>
                <td>$25K</td>
                <td>200K</td>
                <td>TBC </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Tue <br /> 6 Sep
                </td>
                <td>2</td>
                <td>NLH - 8 Handed</td>
                <td>$25K</td>
                <td>200K</td>
                <td>TBC </td>
              </tr>
              <tr>
                <td>3PM</td>
                <td>
                  Tue <br /> 6 Sep
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$30K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Wed <br /> 7 Sep
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$30K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3PM</td>
                <td>
                  Wed <br /> 7 Sep
                </td>
                <td>1</td>
                <td>NLH - 6 Handed</td>
                <td>$50K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Thu <br /> 8 Sep
                </td>
                <td>2</td>
                <td>NLH - 6 Handed</td>
                <td>$50K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>4PM</td>
                <td>
                  Thu <br /> 8 Sep
                </td>
                <td>1</td>
                <td>NLH - 8 Handed</td>
                <td>$75K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Fri <br /> 9 Sep
                </td>
                <td>2</td>
                <td>NLH - 8 Handed</td>
                <td>$75K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>2PM</td>
                <td>
                  Sat <br /> 10 Sep
                </td>
                <td>1</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Sun <br /> 11 Sep
                </td>
                <td>2</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4PM</td>
                <td>
                  Sun <br /> 11 Sep
                </td>
                <td>1</td>
                <td>Pot Limit Omaha</td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>FT</td>
                <td>NLH - Coin Rivet Invitational</td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>2</td>
                <td>Pot Limit Omaha</td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>4PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>1</td>
                <td>NLH - Main Event</td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Tue <br /> 13 Sep
                </td>
                <td>2</td>
                <td>NLH - Main Event</td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4PM</td>
                <td>
                  Tue <br /> 13 Sep
                </td>
                <td>SINGLE</td>
                <td>NLH - TURBO</td>
                <td>$50K</td>
                <td>200K</td>
                <td>20 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Wed <br /> 14 Sep
                </td>
                <td>FT</td>
                <td>NLH - Main Event</td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4PM</td>
                <td>
                  Wed <br /> 14 Sep
                </td>
                <td>1</td>
                <td>Short Deck Ante-Only</td>
                <td>$30K</td>
                <td>100K x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Thu <br /> 15 Sep
                </td>
                <td>2</td>
                <td>Short Deck Ante-Only</td>
                <td>$30K</td>
                <td>100K x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>3PM</td>
                <td>
                  Thu <br /> 15 Sep
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Fri <br /> 16 Sep
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet (PL PF)</td>
                <td>$40K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>3PM</td>
                <td>
                  Fri <br /> 16 Sep
                </td>
                <td>1</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Sat <br /> 17 Sep
                </td>
                <td>2</td>
                <td>SD Ante-Only - 1 Bullet</td>
                <td>$50K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>5PM</td>
                <td>
                  Sat <br /> 17 Sep
                </td>
                <td>1</td>
                <td>SD - Main Event</td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Sun <br /> 18 Sep
                </td>
                <td>2</td>
                <td>SD - Main Event</td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>5PM</td>
                <td>
                  Sun <br /> 18 Sep
                </td>
                <td>1</td>
                <td>Short Deck Ante-Only</td>
                <td>$25K</td>
                <td>100K x3</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1PM</td>
                <td>
                  Mon <br /> 19 Sep
                </td>
                <td>FT</td>
                <td>SD - Main Event</td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>3PM</td>
                <td>
                  Mon <br /> 19 Sep
                </td>
                <td>2</td>
                <td>Short Deck Ante-Only</td>
                <td>$25K</td>
                <td>100K x3</td>
                <td>30 Min</td>
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
