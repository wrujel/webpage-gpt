import { useRef } from "react";
import { gsap, useGSAP, reveals, isReducedMotion } from "../../lib/gsapSetup";
import "./CTA.css";

const Cta = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      reveals(scope.current);
      if (isReducedMotion()) return;

      // magnetic button
      const btn = scope.current.querySelector(".cta__btn");
      const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

      const move = (e) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.35);
        yTo((e.clientY - r.top - r.height / 2) * 0.45);
      };
      const reset = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", reset);
      return () => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", reset);
      };
    },
    { scope },
  );

  return (
    <section className="cta section__margin" ref={scope}>
      <div className="cta__wrapper" data-reveal>
        <div className="cta__content">
          <p>Request Early Access to Get Started</p>
          <h3>Register today &amp; be the first to bring GPT-Bot home</h3>
        </div>
        <button type="button" className="cta__btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Cta;
