import { useRef } from "react";
import {
  gsap,
  useGSAP,
  reveals,
  isReducedMotion,
} from "../../lib/gsapSetup";
import possibilityImage from "../../assets/possibility.webp";
import "./Possibility.css";

const Possibility = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      reveals(scope.current);
      if (isReducedMotion()) return;

      // masked parallax reveal on the visual
      const st = {
        trigger: ".possibility__image",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
      };
      gsap.fromTo(
        ".possibility__image",
        { clipPath: "inset(18% 18% 18% 18% round 28px)" },
        { clipPath: "inset(0% 0% 0% 0% round 28px)", ease: "none", scrollTrigger: st },
      );
      gsap.fromTo(
        ".possibility__image img",
        { scale: 1.3 },
        { scale: 1, ease: "none", scrollTrigger: { ...st } },
      );
    },
    { scope },
  );

  return (
    <section className="possibility section__padding" id="possibility" ref={scope}>
      <div className="possibility__image">
        <img src={possibilityImage} alt="Exploring the world with GPT-Bot" />
      </div>
      <div className="possibility__content">
        <p className="eyebrow" data-reveal>
          The Robot
        </p>
        <h2 data-split>He floats. He listens. He helps.</h2>
        <p className="possibility__text" data-reveal>
          With GPT-Bot hovering at your shoulder, the only limit is your
          imagination. Revolutionize your mornings, draft content in a fraction
          of the time, automate your home, or simply have someone brilliant to
          talk to — GPT-Bot has you covered.
        </p>
        <a className="possibility__link" href="#blog" data-reveal>
          Request Early Access to Get Started
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Possibility;
