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
    width: 200px;
    text-align: certer;
    display: inline;
  }
  .sponsor {
    width: 32%;
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
    .sponsor {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: baseline;
    }
    .vender-logos {
      margin-bottom: 10px !important;
    }
    .sponsor img {
      padding-top: 10px !important;
    }
    .sponsor-2 {
      margin-bottom: 10px !important;
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
      height: 150px;
    }
    .line-2 {
      margin-left: 0px;
    }
  }
`;

export default SectionWrapper;
