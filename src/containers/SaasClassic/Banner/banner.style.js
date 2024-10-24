import desktopBg from "common/assets/image/saasClassic/TPSHRS-Monte-Carlo-Landing-Page-Bg-Banner-desktop.png";
import mobileBg from "common/assets/image/saasClassic/TPSHRS-Monte-Carlo-Landing-Page-Bg-Banner.png";
import styled, { keyframes } from "styled-components";

const Bubble = keyframes`
  0% {
		box-shadow: 0 0 0 3px rgba(255,65,108,0.3);
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		box-shadow: 0 0 0 100px rgba(255,65,108,0);
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
`;

export const BannerWrapper = styled.section`
  padding: 100px 0 50px 0;
  background-image: url(${desktopBg.src});
  background-size: cover;
  background-position: bottom;
  min-height: 90vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: #000;
  .video-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    align-content: center;
  }
  .react-player__play-icon {
    border-color: transparent transparent transparent red !important;
    border-width: 36px 0px 36px 56px !important;
  }
  @media (max-width: 1100px) {
    min-height: auto;
  }
  @media (max-width: 731px) {
    background-image: url(${mobileBg.src});
    padding: 120px 0 0 0;
    .react-reveal > div {
      width: 400px !important;
      height: 225px !important;
    }
  }

  .text-st {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    padding-top: 40px;
    & span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .sponsor {
    max-width: 96px;
    @media (min-width: 640px) {
      max-width: 128px;
    }
    @media (min-width: 768px) {
      max-width: 192px;
    }
    height: auto;
    display: block;
  }

  .banner-shape {
    z-index: 2;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;

export const VideoModal = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;

    );
    opacity: 0.2;
    pointer-events: none;
    z-index: 2;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4553;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    svg {
      width: 30px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  &:focus {
    &:after {
      animation: ${Bubble} 0.5s ease-out forwards;
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: calc(100% - 30px);
  width: 900px;
  position: relative;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
