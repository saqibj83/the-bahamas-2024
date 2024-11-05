import Box from "common/components/Box";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import PropTypes from "prop-types";

import VendorLogos from "common/assets/image/saasClassic/wpt-global.png";
import SectionWrapper from "./trial.style";

const TrialSection = ({
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  return (
    <SectionWrapper className="trial-section" id="sponsor_section">
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Our Sponsors and Partners" />
            <div className="sponsor-2">
              <Box className="sponsor" style={{ padding: "0 30px" }}>
                <h3 className="text-primary" style={{ fontSize: "16px" }}>
                  TITLE SPONSOR
                </h3>
                <div className="logoh">
                  <a href="https://wptglobal.com//" target="_blank">
                    <NextImage src={VendorLogos} alt="GG Poker" />
                  </a>
                </div>
              </Box>
            </div>

            <div className="sponsor-2">
              {/* <Box className="sponsor" style={{ padding: "0 22px" }}>
                <h3 style={{ color: "#EBA800", fontSize: "18px" }}>
                  OFFICIAL STAKING PARTNER
                </h3>
                <div className="logoh">
                  {" "}
                  <a href="https://pokerstake.com/" target="_blank">
                    <img
                      src="https://cdn.triton-series.com/wp-content/uploads/2019/12/07141554/poker.png"
                      alt="Poker Stake"
                      style={{
                        display: "inline",
                        width: "270px",
                        marginTop: "-25px",
                      }}
                    />
                  </a>
                </div>
              </Box> */}
              <Box className="sponsor" style={{ marginRigh: "50px" }}>
                <h3 className="text-primary mt-8" style={{ fontSize: "16px" }}>
                  OFFICIAL TIMEKEEPER
                </h3>
                <div className="logoh">
                  {" "}
                  <a href="https://jacobandco.com/" target="_blank">
                    <img
                      src="https://cdn.triton-series.com/wp-content/uploads/2019/12/31172617/jacobco-h.svg"
                      alt="J&Co."
                      style={{
                        display: "inline",
                        width: "90px",
                      }}
                    />
                  </a>
                </div>
              </Box>

              {/* <Box className="sponsor1">
                <h3 style={{ color: "#EBA800", fontSize: "18px" }}>
                  Venue Partner
                </h3>
                <div className="logoh">
                  {" "}
                  <a href="https://lesambassadeurs.com/" target="_blank">
                    <NextImage
                      src={VendorLogos3}
                      alt="ambassadeurs"
                      style={{
                        display: "inline",
                      }}
                    />
                  </a>
                </div>
              </Box> */}
            </div>

            <Box className="sponsor-2">
              <div className="sponsor1">
                <a href="https://gtowizard.com/en/" target="_blank">
                  {" "}
                  <img
                    src="https://cdn.triton-series.com/wp-content/uploads/2019/12/06003012/Logo-green-white.png"
                    alt="g"
                    style={{
                      display: "inline",
                      marginTop: "35px",
                    }}
                  />
                </a>
              </div>
              {/* <div className="sponsor1">
                <a href="https://firstlandofpoker.com/" target="_blank">
                  {" "}
                  <img
                    src="https://cdn.triton-series.com/wp-content/uploads/2023/07/27173015/full-land-white.svg"
                    alt="g"
                    style={{
                      display: "inline",
                      marginTop: "40px",
                    }}
                  />
                </a>
              </div> */}
              <div className="sponsor1">
                <a href="https://betacr.eu/" target="_blank">
                  {" "}
                  <img
                    src="https://cdn.triton-series.com/wp-content/uploads/2023/07/27173503/BetACR_White.svg"
                    alt="g"
                    style={{
                      display: "inline",
                      marginTop: "35px",
                    }}
                  />
                </a>
              </div>
            </Box>

            {/* <Box className="sponsor">
              <NextImage src={VendorLogos4} alt="inventional" />
            </Box>*/}
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.propTypes = {
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "100%", "100%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
    flexBox: true,
    justifyContent: "center",
  },
  title: {
    fontSize: ["20px", "24px", "30px", "36px"],
    fontWeight: "700",
    color: "var(--primary)",
    letterSpacing: "-0.025em",
    mb: ["20px", "22px"],
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "18px", "18px", "18px"],
    color: "#fff",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "secondaryWithBg",
    pl: ["15px", "30px"],
    pr: ["15px", "30px"],
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    colors: "secondary",
  },
};

export default TrialSection;
