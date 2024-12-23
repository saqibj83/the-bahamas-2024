import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 100px 0 0px 0;
  @media (max-width: 575px) {
    padding-top: 60px;
  }
  .rc-tabs-content-holder {
  }
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }

  .rc-tabs-tabpane h2 {
    color: #212121;
    padding: 20px 40px 0;
    font-size: 18px;
  }
  .rc-tabs-tab-btn {
    font-weight: bold;
    font-size: 18px;
  }
  .rc-tabs-tabpane h3 {
    color: #212121;
    padding: 10px 0 0 40px;
  }
  .rc-tabs-tabpane p {
    color: #212121;
    padding: 0 40px;
    line-height: 20px;
    font-size: 18px;
    text-transform: none;
  }

  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .accordion__item {
    border-top: none !important;
    border-bottom: none !important;
  }
  ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    padding: 10px 0 0 20px;
    color: #212121;
    font-size: 18px;
    text-transform: none;
  }
  li a {
    color: var(--primary) !important;
    text-decoration: underline;
  }
  .update-screen-tab {
    border: 0;
    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container,
    .rc-tabs-nav-wrap {
      margin-bottom: 0;
      box-sizing: border-box;
      position: relative;
      @media (max-width: 767px) {
        margin-bottom: 0;
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        // height: 1px;
        // background: #e7e8eb;
        display: block;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll,
        .rc-tabs-nav-list {
          width: 100%;
          text-align: center;
          justify-content: center;
          @media (max-width: 767px) {
            flex-wrap: wrap;
          }
          .rc-tabs-nav {
            float: none;
            display: block;

            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 18px;
        color: var(--primary);
        font-weight: 400;
        flex: 1;
        padding: 10px 0 10px 0;
        text-align: center;
        background: transparent !important;
        transition: 0.25s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #7a5a2c;
        &:not(:first-child) {
          border-left: none;
        }
        float: none;
        &:hover {
          color: #fff;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:after {
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
          color: #000;
          background: linear-gradient(90deg, #cf933f, #deb378 50%, #ce923e 75%) !important;

          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }
        }
      }
      &::before {
        border: 0;
      }
    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        overflow: hidden;
        border: 2px solid #7a5a2c;
        border-top: none;
        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  @media (max-width: 575px) {
    padding: 60px 0 0px 0;
    .container {
      padding: 10px;
      padding-bottom: 0px;
    }
    .primary-cta {
      margin: 0 20px 20px !important;
      font-size: 14px !important;
      padding: 10px 15px !important;
    }
    .rc-tabs-tab-btn {
      font-weight: bold;
      font-size: 12px;
    }
    .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab {
      min-width: auto;
      padding: 0 10px 0 10px;
    }
  }
  .rc-tabs-nav-operations {
    display: none;
  }
  .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab > div {
    margin-right: 0;
  }
  .accordion_item {
    padding: 16px !important;
    &:nth-child(2n + 1) {
      background: #1e1e1e;
    }
    h2 {
      padding: 0 !important;
    }
  }
`;

export default SectionWrapper;
