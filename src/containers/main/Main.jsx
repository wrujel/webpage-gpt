import { useRef } from "react";
import PropTypes from "prop-types";
import { gsap, useGSAP, SplitText, isReducedMotion } from "../../lib/gsapSetup";
import people from "../../assets/people.png";
import robot from "../../assets/ai_robot.png";
import SoftAurora from "../../components/ui/SoftAurora";
import "./Main.css";

const phrases = [
  "Hi, I'm GPT-Bot — your new assistant.",
  "Yes, I float. It's faster.",
  "Ask me anything.",
  "I already charged myself. You're welcome.",
];

const Main = ({ booted }) => {
  const scope = useRef(null);

  // intro reveal + ambient life — starts when the preloader curtain lifts
  useGSAP(
    () => {
      if (!booted) return;

      if (isReducedMotion()) return; // static robot, static bubble

      const split = SplitText.create(".hero__title", {
        type: "lines,chars",
        mask: "lines",
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.6 })
        .from(
          split.chars,
          { yPercent: 120, duration: 0.8, stagger: 0.018 },
          "-=0.3",
        )
        .from(".hero__sub", { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.45")
        .from(".hero__form", { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".hero__people", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.5")
        // the robot rises into frame
        .from(
          ".hero__visual",
          {
            y: 90,
            autoAlpha: 0,
            scale: 0.92,
            duration: 1.2,
            ease: "power3.out",
          },
          0.4,
        );

      // idle float — he hovers, his shadow breathes in sync
      gsap.to(".hero__float", {
        y: -16,
        rotation: 1.4,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero__shadow", {
        scaleX: 0.78,
        autoAlpha: 0.45,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // speech bubble — he keeps talking
      const bubble = scope.current.querySelector(".hero__bubble");
      const bubbleText = scope.current.querySelector(".hero__bubble-text");
      gsap.set(bubble, { autoAlpha: 0 });
      const bubbleTl = gsap.timeline({ repeat: -1, delay: 2.6 });
      phrases.forEach((phrase) => {
        bubbleTl
          .call(() => {
            bubbleText.textContent = phrase;
          })
          .fromTo(
            bubble,
            { scale: 0.5, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 0.45, ease: "back.out(2.2)" },
          )
          .to(
            bubble,
            { scale: 0.5, autoAlpha: 0, duration: 0.3, ease: "power2.in" },
            "+=2.6",
          );
      });
    },
    { scope, dependencies: [booted] },
  );

  // pinned cinematic scroll story — desktop only
  useGSAP(
    () => {
      if (isReducedMotion()) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "+=180%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // scene 1 — headline drifts and settles
        tl.to(".hero__content", { yPercent: -8, duration: 2 }, 0)
          .to(
            ".hero__title",
            { scale: 0.92, transformOrigin: "left top", duration: 2 },
            0,
          )
          // scene 2 — the grid floor rushes by (scroll-driven), robot parallax
          .to(
            ".floor__grid",
            { "--gy": "140px", opacity: 0.9, duration: 2.5 },
            0,
          )
          .to(
            ".hero__visual",
            { yPercent: -12, rotate: -2.5, duration: 2.5 },
            0,
          )
          // scene 3 — title card: content dims, giant wordmark takes the screen
          .to(".hero__content", { autoAlpha: 0.15, duration: 1 }, 2)
          .to(".hero__visual", { autoAlpha: 0.25, scale: 0.94, duration: 1 }, 2)
          .fromTo(
            ".hero__bigword",
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" },
            2.2,
          );
      });
    },
    { scope },
  );

  return (
    <section className="hero" id="home" ref={scope}>
      {!isReducedMotion() && (
        <div className="hero__aurora" aria-hidden="true">
          <SoftAurora
            color1="#b26bff"
            color2="#ff7b54"
            brightness={0.55}
            speed={0.6}
            mouseInfluence={0}
          />
        </div>
      )}
      <div className="floor" aria-hidden="true">
        <div className="floor__grid" />
        <div className="floor__horizon" />
      </div>
      <div className="hero__bigword" aria-hidden="true">
        GPT-BOT
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow eyebrow">
            GPT-Bot — your floating assistant
          </p>
          <h1 className="hero__title">
            <span className="hero__title-line">Say hi to GPT-Bot</span>
            <span className="hero__title-line">Your AI assistant</span>
          </h1>
          <p className="hero__sub">
            GPT-Bot is a futuristic assistant robot that hovers by your side —
            answering questions, drafting ideas and getting things done before
            you even ask. Say hi and see what he can do.
          </p>
          <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email Address"
              aria-label="Email address"
            />
            <button type="submit">Get Started</button>
          </form>
          <div className="hero__people">
            <img src={people} alt="People who requested access" />
            <span>
              1,600 people requested early access in the last 24 hours
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__float">
            <img
              className="hero__robot"
              src={robot}
              alt="GPT-Bot, a floating assistant robot"
            />
            <div className="hero__bubble">
              <p className="hero__bubble-text">
                Hi, I&apos;m GPT-Bot — your new assistant.
              </p>
            </div>
          </div>
          <div className="hero__shadow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  booted: PropTypes.bool.isRequired,
};

export default Main;
