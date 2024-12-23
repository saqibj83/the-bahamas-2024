import styled, { createGlobalStyle, keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const Fade = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
const FadeUp = keyframes`
  0% {
		opacity: 0;
    transform: scale(.5)
	}
	100% {
		opacity: 1;
    transform: scale(1)
	}
`;

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Manrope', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Manrope', sans-serif;
  }

  input, button, textarea {
    font-family: 'Manrope', sans-serif;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 16px;
            }
            &:hover {
              color: #ff4361;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #ff4361;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #ff4361;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #ff4361;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .video-modal{
    background: rgba(0,0,0,0.6) !important;
    border: 0 !important;
    animation: ${Fade} .5s ease-out forwards !important;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      animation: ${FadeUp} .7s ease-out forwards !important;
    }
  }
  .reuseModalOverlay,
  .modalCloseBtn{
    
    animation: ${Fade} .5s ease-out forwards !important;
  }

  .video-modal{
    background: transparent !important;
    border: 0!important;
    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }
  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;

  .sass_creative_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .main-logo {
      display: block;
    }
    .sticky-logo {
      display: none;
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }
    .main_menu {
      margin-left: 45px;
      li {
        display: inline-flex;
        padding-left: 13px;
        padding-right: 13px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet("colors.primary")};
          }
        }
        a {
          color: ${themeGet("colors.white")};
          font-size: 15px;
          line-height: 2.2;
          font-weight: 500;
          padding: 5px;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet("colors.primary")};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }

    .navbar_button button {
      font-size: 15px;
      line-height: 20px;
      font-weight: 700;
    }
    .navbar_button_one {
      margin-left: auto;

      button {
        background-color: transparent;
        padding: 0;
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      margin-left: 25px;
      button {
        border-radius: 8px;
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet("colors.white")};
        }
      }
    }
  }

  .sticky-nav-active {
    .sass_creative_navbar {
      background-color: ${themeGet("colors.white")};
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
      }
      .sticky-logo {
        display: block;
      }
      .main_menu li a {
        color: ${themeGet("colors.headingColor")};
      }
      .main_menu li:hover a,
      .main_menu li.is-current a {
        color: #1089ff;
      }
      .reusecore-drawer__handler {
        .hamburgMenu__bar {
          > span {
            background-color: ${themeGet("colors.headingColor")};
          }
        }
      }
      .navbar_button_one button {
        color: ${themeGet("colors.headingColor")};
      }
      .navbar_button_two button {
      }
    }
  }
`;
