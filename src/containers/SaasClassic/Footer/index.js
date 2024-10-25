import Container from "common/components/UI/Container";
import Link from "next/link";
import PropTypes from "prop-types";
import FooterWrapper from "./footer.style";

const Footer = ({ row, col, colOne, colTwo, buttonStyle, titleStyle, logoStyle, textStyle }) => {
  return (
    <FooterWrapper>
      <Container className="footer_container sm:mt-20">
        <div className="footer-top ">
          <div className="grid grid-cols-1 px-6 md:px-0 lg:grid-cols-2 gap-8  -mx-2">
            <div className="px-2">
              <div className="footer-top__social flex flex-col  md:mt-8 h-full">
                <div>
                  <span className="footer-nav__col-title">SITEMAP</span>
                  <ul>
                    <li>
                      <Link href="#banner_section">
                        <i className="icon-arrow-sm"></i>
                        Home
                      </Link>
                    </li>
                    {/* <li>
                    <Link href="#event_section" legacyBehavior>
                      <a>
                        <i className="icon-arrow-sm"></i>
                        Event schedule
                      </a>
                    </Link>
                  </li> */}
                    <li>
                      <Link href="#channel_section">
                        <i className="icon-arrow-sm"></i>Live Channels
                      </Link>
                    </li>
                    <li>
                      <Link href="#venue">
                        <i className="icon-arrow-sm"></i>Venue
                      </Link>
                    </li>
                    <li>
                      <Link href="#sponsor_section">
                        <i className="icon-arrow-sm"></i>Sponsors
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-nav_subscribe mt-12">
                  <span className="footer-nav__col-title !mb-5 mt-5">NEWSLETTER</span>

                  <div className="box-field__row">
                    <div className="box-field">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn !font-bold bg-[#DFA95B]">
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-nav_cotact mt-8">
              <span className="footer-nav__col-title">CONTACT</span>
              <p
                style={{
                  fontSize: "16px",
                  float: "left",
                }}
              >
                <i className="icon-map-pin"></i> 85, Fenlex House, St. John Street, Valletta,
                VLT1165, Malta
              </p>
              <ul>
                <li>
                  <i className="icon-mail"></i>
                  <a target="_blank" href="mailto:info@triton-series.com">
                    info@triton-series.com{" "}
                  </a>
                </li>
                <li>
                  <i className="icon-mail"></i>
                  <a target="_blank" href="mailto:register@triton-series.com">
                    register@triton-series.com
                  </a>
                </li>
                <li>
                  <i className="icon-mail"></i>
                  <a target="_blank" href="mailto:partnerships@triton-series.com">
                    partnerships@triton-series.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <span>&copy; All rights reserved. Triton Series 2024</span>
          <div className="flx">
            <Link
              target="_blank"
              className="linkFooter"
              href="https://triton-series.com/privacy-policy/"
            >
              Privacy Policy
            </Link>
            <Link
              target="_blank"
              className="linkFooter"
              href="https://triton-series.com/terms-and-conditions/"
            >
              Terms and Conditions
            </Link>
            <Link
              target="_blank"
              className="linkFooter"
              href="https://triton-series.com/about-paul-phua"
            >
              About Paul Phua
            </Link>
            {/* <Link href="/en">
              <a className="linkFooter">
                <img
                  class="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                ></img>
              </a>
            </Link>
            <Link href="cn">
              <a className="linkFooter">
                <img
                  class="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                ></img>
              </a>
            </Link> */}
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: [1, "35%", "35%", "40%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "65%", "65%", "60%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    mb: "30px",
  },
  // Default logo size
  logoStyle: {
    width: "130px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#fff",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
