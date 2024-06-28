import logo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="web__footer">
      <div className="web__footer-wrapper">
        <div className="web__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
        </div>
        <div className="web__footer-btn">
          <button type="button">Request Early Access</button>
        </div>
        <div className="web__footer-links">
          <div className="web__footer-links__logo">
            <img src={logo} alt="logo" />
            <p>OpenAI &copy; 2015 &ndash; 2024</p>
          </div>
          <div className="web__footer-links__section">
            <span>ChatGPT</span>
            <ul>
              <li>For Everyone</li>
              <li>For Teams</li>
              <li>For Enterprises</li>
              <li>ChatGPT login</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="web__footer-links__section">
            <span>Company</span>
            <ul>
              <li>About us</li>
              <li>News</li>
              <li>Our Charter</li>
              <li>Security</li>
              <li>Residency</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="web__footer-links__section">
            <span>Terms & policies</span>
            <ul>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Brand guidelines</li>
              <li>Other policies</li>
            </ul>
          </div>
        </div>
        <div className="web__footer-copyright">
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
