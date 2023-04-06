import styled from "styled-components";

const SectionWrapper = styled.section`
  background: #000;
  padding: 100px 0 0 0;

  .sponsor-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
  }

  .sponsors-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
  }

  .sponsor img {
    width: 150px !important;
    text-align: certer;
  }
  @media (max-width: 550px) {
    padding: 65px 0 0 0;
    .sponsor {
      width: 100%;
      text-align: certer;
    }
    .sponsors-logo {
      grid-template-columns: 1fr;
    }
  }

  .vender-logos {
    width: 25%;
    float: left;
    text-align: center;
    margin-bottom: 0;
  }
  .line-2 {
    margin-left: 15%;
  }
  .justify-cen {
  }
  @media (max-width: 550px) {
    .vender-logos {
      width: 100%;
      float: left;
      text-align: center;
      margin-bottom: 10px;
      padding: 10px;
    }
    .line-2 {
      margin-left: 0px;
    }
  }
`;

export default SectionWrapper;
