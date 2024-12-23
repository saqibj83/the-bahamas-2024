import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";

import PartnerSectionWrapper from "./partner.style";
import LondonDesk from "common/assets/image/saasClassic/london-desk.png";
import LondonMob from "common/assets/image/saasClassic/london-mob.png";

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  return (
    <PartnerSectionWrapper id="st_section">
      <Box {...row}>
        <NextImage
          className="hidden md:block"
          src={LondonDesk}
          alt="NHL SPECIAL CAHS GAME LIVE STREAMING"
        />
        <NextImage
          className="block md:hidden"
          src={LondonMob}
          alt="NHL SPECIAL CAHS GAME LIVE STREAMING"
        />
      </Box>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  imageAreaRow: {
    flexDirection: "row-reverse",
  },
  col: {
    pr: "15px",
    pl: "15px",
  },
  textArea: {
    width: ["100%", "100%", "55%", "50%", "42%"],
  },
  imageArea: {
    width: ["100%", "100%", "45%", "50%", "58%"],
    mb: ["40px", "40px", "0", "0", "0"],
  },
  title: {
    fontSize: ["26px", "30px", "30px", "48px", "48px"],
    fontWeight: "400",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "15px",
    lineHeight: "1.25",
  },
  description: {
    fontSize: "16px",
    color: "#ffe2e2",
    lineHeight: "1.75",
    mb: "33px",
  },
  button: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "secondaryWithBg",
    minWidth: "150px",
  },
};

export default PartnerSection;
