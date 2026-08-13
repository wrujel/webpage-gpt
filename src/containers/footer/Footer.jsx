import { useRef } from "react";
import { useGSAP, reveals } from "../../lib/gsapSetup";
import "./Footer.css";

const Footer = () => {
  const scope = useRef(null);

  useGSAP(() => reveals(scope.current), { scope });

  return (
    <footer className="footer" ref={scope}>
      <div className="floor floor--static" aria-hidden="true">
        <div className="floor__grid" />
      </div>
      <div className="footer__wrapper">
        <h2 className="footer__heading" data-split>
          Do you want to step in to the future before others
        </h2>
        <button type="button" className="footer__btn" data-reveal>
          Request Early Access
        </button>

        <div className="footer__links" data-reveal-group>
          <div className="footer__brand">
            <p className="footer__logo">
              GPT<span>-Bot</span>
            </p>
            <p>GPT-Bot &copy; 2026 &mdash; a concept experience</p>
          </div>
          <div className="footer__section">
            <span>GPT-Bot</span>
            <ul>
              <li>For Everyone</li>
              <li>For Teams</li>
              <li>For Enterprises</li>
              <li>GPT-Bot login</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="footer__section">
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
          <div className="footer__section">
            <span>Terms &amp; policies</span>
            <ul>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Brand guidelines</li>
              <li>Other policies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true" data-reveal>
        GPT-BOT
      </div>

      <div className="footer__copyright">
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
