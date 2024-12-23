import { closeModal, openModal } from "@redq/reuse-modal";
import logo from "common/assets/image/saasClassic/Logo-and-Event-information.png";
import sponsor from "common/assets/image/saasClassic/WPT_Global_Light_R_Stacked.png";
import Box from "common/components/Box";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";
import { BannerWrapper, VideoWrapper } from "./banner.style";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/UCazyTEqs00"
      frameBorder="0"
    />
  </VideoWrapper>
);

const BannerSection = ({ row, contentWrapper, title, imageWrapper }) => {
  // modal handler
  const handleVideoModal = () => {
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
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <Container className="">
        <Box {...row}>
          <Box {...contentWrapper} className="text-center">
            <img src={logo.src} alt="Logo and Event" className="logo w-full" />
            <p className="text-foreground  mb-12">
              ATLANTIS, BAHAMAS <br />
              6th - 19th December 2024
            </p>
            <div className="video-section">
              <Fade bottom>
                <ReactPlayer
                  url="https://www.youtube.com/embed/UCazyTEqs00"
                  playing={true}
                  playsinline
                  width="711px"
                  height="400px"
                  controls
                />
              </Fade>
            </div>
            {/* <div className="sponsor flex items-center justify-center">
              <p className="text-foreground font-bold text-[8px] xs:text-[10px] sm:text-xs md:text-sm sm:-me-4">
                TITLE SPONSOR
              </p>

              <img src={sponsor.src} alt="Sponsor" />
            </div> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: ["100%", "100%", "80%", "800px", "800px"],
    mb: "20px",
  },
  title: {
    fontSize: ["24px", "32px", "40px", "42px", "46px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.2",
    textAlign: "center",
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#fff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#fff",
    mb: 0,
    as: "span",
  },
  fillButton: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    colors: "secondaryWithBg",
    height: "46px",
    minWidth: ["auto", "150px"],
    height: ["40px", "46px"],
    minHeight: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "35px",
  },
  button: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    color: "#fff",
    colors: "secondary",
    height: ["40px", "46px"],
    minHeight: "auto",
  },
};

export default BannerSection;
