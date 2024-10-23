import bg from "common/assets/image/saasClassic/Join-us-Banner.png";
import styled from "styled-components";

const NewsletterWrapper = styled.div`
  .bg {
    background: url(${bg.src});
  }
  .join {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .small {
    color: var(--foreground);
    font-size: 12px;
    margin-top: 2px;
    text-align: center;
  }
  align-items: center;
  .primary-cta {
    text-decoration: none;
    color: #000;
    min-width: 350px;
    font-size: 30px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    background: linear-gradient(
      90deg,
      rgba(190, 123, 14, 1) 0%,
      rgba(213, 149, 42, 1) 17%,
      rgba(203, 158, 71, 1) 35%,
      rgba(235, 194, 113, 1) 50%,
      rgba(199, 133, 28, 1) 90%,
      rgba(215, 131, 0, 1) 100%
    );
    .react-datepicker-wrapper {
      position: relative;
      width: 40% !important;
    }
    // .emil {
    //   margin-top: -25px;
    // }
    .join_section {
      padding-top: 100px;
    }
    .join_section h2 {
      margin-bottom: 50px;
    }
    @media (max-width: 575px) {
      padding: 35px 20px;
      form {
        display: block;
      }
    }
    @media (max-width: 990px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-start !important;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
    .emil {
      margin-top: -30px !important;
    }
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
    .email_input label {
      padding-left: 0 !important;
    }
    .date_input {
      padding: 10px 0px 5px 10px;
      width: 115% !important;
    }
    span.to {
      padding-left: 15px;
    }
  }
  .date_input {
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    padding: 10px 15px;
    border-color: #514f50;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
  .email_input {
    flex-grow: 1;
    margin-right: 20px;
    margin-bottom: 40px;
    font-size: 18px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #000;
        }
        .highlight {
          background: #000;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      padding: 10px 15px;
      border-color: #514f50;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #000;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export default NewsletterWrapper;
