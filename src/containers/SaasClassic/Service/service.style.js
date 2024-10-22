import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 100px 0 1px 0;
  .prime-cta1 {
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    text-decoration: none;
    color: #000;
    margin: 20px 20px;
    font-size: 16px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    box-shadow: #000 3px 3px 6px 0;
    position: relative;
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    height: 60px;
  }
  .cetered {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }
  .title-img {
    display: inline !important;
    width: 500px !important;
    margin-top: 20px !important;
  }
  .cta-btn {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .prime-cta {
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .prime-cta .tooltiptext {
    visibility: hidden;
    background-color: #000000;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    margin-top: -37px;
    padding: 4px;
    border: 1px solid var(--primary);
    z-index: 90;
    width: 150px;
  }
  .prime-cta:hover .tooltiptext {
    visibility: visible;
  }
  .primary-cta {
    text-decoration: none;
    color: #000;
    margin: 20px 20px;
    min-width: 350px;
    font-size: 16px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: #000 3px 3px 6px 0;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    height: 60px;
  }
  @media (max-width: 550px) {
    padding: 75px 0 5px 0;
    .prime-cta {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .primary-cta {
      margin: 0px;
    }
    .cta-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .service_item {
    position: relative;
    text-align: center;
    .service_icon {
      width: 110px;
      height: 110px;
      border-radius: 35px;
      background-color: #ffecef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 28px auto;
      color: #ff4361;
      @media (max-width: 990px) {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }
  }
  .non-mobile {
    display: none;
    max-width: 100vw;
    border-radius: 6px;
    overflow: hidden;
    border-left: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
  }
  .non-desktop {
    display: block;
  }
  h5 {
    font-weight: 700 !important;
    color: #000;
  }
  table {
    border-radius: 6px 6px 0 0;
    overflow: hidden;
  }
  @media (max-width: 550px) {
    .non-desktop {
      display: none;
    }
    .video-modal {
      min-width: 350px !important;
    }
    table {
      width: 600px;
    }

    .non-mobile {
      display: block;
      overflow-x: auto;
      margin: 0 10px;
    }
    .container {
      padding: 0 !important;
    }
    h5 {
      color: #000;
      font-size: 12px;
      text-align: center;
    }
    tbody {
      height: 450px;
    }
    .non-mob {
      display: block;
    }
    thead tr {
      margin-right: 5px !important;
    }
    td {
      padding: 15px 0 15px 0 !important;
    }
    td:nth-child(1),
    th:nth-child(1) {
      width: 25px !important;
      font-size: 11px !important;
    }
    td:nth-child(2),
    th:nth-child(2) {
      width: 55px !important;
      font-size: 10px !important;
      text-align: center;
    }
    td:nth-child(3),
    th:nth-child(3) {
      width: 25px !important;
      font-size: 10px !important;
      text-align: center;
    }
    td:nth-child(4),
    th:nth-child(4) {
      width: 100px !important;
      font-size: 10px !important;
    }
    td:nth-child(5),
    th:nth-child(5) {
      width: 70px !important;
      font-size: 10px !important;
    }
    td:nth-child(6),
    th:nth-child(6) {
      width: 80px !important;
      font-size: 10px !important;
    }
    td:nth-child(7),
    th:nth-child(7) {
      width: 40px !important;
      font-size: 10px !important;
      text-align: center;
    }
    td:nth-child(8),
    th:nth-child(8) {
      width: 40px !important;
      font-size: 10px !important;
      text-align: center;
    }
  }

  table {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1 0 100%;
    }
  }
  thead {
    background: linear-gradient(90deg, #cf933f, #deb378 50%, #ce923e 90%);
  }
  tbody {
    overflow: auto;
    height: calc(100vh - 2rem - 50px);
    border-top: 1px solid grey;
    height: 550px;
    border-left: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    border-radius: 0 0 6px 6px;
  }

  /* Step 3: apply flex to all rows */
  thead tr,
  tbody tr {
    display: flex;
    justify-content: space-between;
    padding: 3px 20px;
    align-items: center;
  }

  thead tr {
    height: 60px;
    align-items: center;
    margin-right: 20px;
  }

  th,
  td {
    text-align: left;
    vertical-align: middle;
    padding: 15px 0;
    color: #fff;
  }

  tbody tr:nth-child(even) {
    background-color: #242323;
  }

  td:nth-child(1),
  th:nth-child(1) {
    width: 100px;
    font-size: 16px;
    color: var(--primary);
    text-align: center;
  }
  td:nth-child(2),
  th:nth-child(2) {
    width: 130px;
    font-size: 16px;
    color: var(--primary);
    text-align: center;
  }
  td:nth-child(3),
  th:nth-child(3) {
    width: 70px;
    text-align: center;
  }
  td:nth-child(4),
  th:nth-child(4) {
    width: 150px;
    font-size: 16px;
    color: var(--primary);
    text-align: center;
    width: 160px;
  }
  td:nth-child(5),
  th:nth-child(5) {
    width: 130px;
    text-align: center;
  }
  td:nth-child(6),
  th:nth-child(6) {
    width: 130px;
    text-align: center;
  }
  td:nth-child(7),
  th:nth-child(7) {
    width: 80px;
    text-align: center;
  }
  th:nth-child(8),
  td:nth-child(8) {
    width: 60px;
    text-align: center;
  }
  .service_item_col {
    &:nth-child(1) {
      .service_item {
        .service_icon {
          font-size: 56px;
          @media (max-width: 990px) {
            font-size: 48px;
          }
        }
      }
    }

    &:nth-child(2) {
      .service_item {
        .service_icon {
          background-color: #eaf9ff;
          color: #45b1e1;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #45b1e1;
        }
      }
    }

    &:nth-child(3) {
      .service_item {
        .service_icon {
          background-color: #fff6d3;
          color: #d6ab00;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
        }
        h3 {
          color: #d6ab00;
        }
      }
    }

    &:nth-child(4) {
      .service_item {
        .service_icon {
          background-color: #e4ffee;
          color: #40975f;
          font-size: 46px;
          @media (max-width: 990px) {
            font-size: 40px;
          }
          i {
            height: 36px;
          }
        }
        h3 {
          color: #40975f;
        }
      }
    }

    &:nth-child(5) {
      .service_item {
        .service_icon {
          background-color: #f4f4ff;
          color: #5856d6;
          font-size: 32px;
          @media (max-width: 990px) {
            font-size: 28px;
          }
        }
        h3 {
          color: #5856d6;
        }
      }
    }
  }
`;

export default SectionWrapper;
