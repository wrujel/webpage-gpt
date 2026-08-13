import { useRef, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  isReducedMotion,
} from "../../lib/gsapSetup";
import "./Navbar.css";

const Menu = () => (
  <>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#info">What is GPT-Bot</a>
      </li>
      <li>
        <a href="#possibility">The Robot</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </ul>
  </>
);

const Sign = () => (
  <>
    <ul>
      <li>
        <span>Sign in</span>
      </li>
      <li>
        <button type="button">Sign up</button>
      </li>
    </ul>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scope = useRef(null);

  // hide on scroll down, reveal on scroll up
  useGSAP(
    () => {
      if (isReducedMotion()) return;
      const st = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === 1 && self.scroll() > 120) {
            gsap.to(scope.current, {
              yPercent: -140,
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            });
          } else {
            gsap.to(scope.current, {
              yPercent: 0,
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            });
          }
        },
      });
      return () => st.kill();
    },
    { scope },
  );

  // mobile menu entrance
  useGSAP(
    () => {
      if (!toggleMenu || isReducedMotion()) return;
      gsap.from(".navbar__mobile", {
        y: -16,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.from(".navbar__mobile li", {
        y: 14,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    { scope, dependencies: [toggleMenu] },
  );

  return (
    <header className="navbar" ref={scope}>
      <nav className="navbar__pill">
        <a href="#home" className="navbar__logo">
          GPT<span>-Bot</span>
        </a>
        <div className="navbar__links">
          <Menu />
        </div>
        <div className="navbar__sign">
          <Sign />
        </div>
        <div className="navbar__toggle">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <div className="navbar__mobile">
          <div onClick={() => setToggleMenu(false)}>
            <Menu />
          </div>
          <div className="navbar__mobile-sign">
            <Sign />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
