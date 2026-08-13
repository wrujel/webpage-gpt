import { useRef } from "react";
import { Feature } from "../../components";
import { useGSAP, reveals } from "../../lib/gsapSetup";
import "./Features.css";

const featuresData = [
  {
    id: 1,
    title: "Advanced Language Understanding",
    text: "GPT-Bot understands nuance, tone and context, so talking to him feels like talking to a person — not programming a machine.",
  },
  {
    id: 2,
    title: "A Personality You Can Tune",
    text: "Formal at work, playful at home. Adjust GPT-Bot's voice, humor and behavior until he fits your life perfectly.",
  },
  {
    id: 3,
    title: "Always By Your Side",
    text: "He floats from room to room, connects to your devices through our API, and is ready to help before you finish asking.",
  },
  {
    id: 4,
    title: "Learns Every Day",
    text: "GPT-Bot keeps learning from every interaction — with your permission — becoming more helpful, and more you, over time.",
  },
];

const Features = () => {
  const scope = useRef(null);

  useGSAP(() => reveals(scope.current), { scope });

  const trackGlow = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="features section__padding" id="features" ref={scope}>
      <div className="features__heading">
        <p className="eyebrow" data-reveal>
          Case studies
        </p>
        <h2 data-split>
          The Future is Now and You Just Need to Realize It. Step into the
          Future Today and Make it Happen.
        </h2>
        <a className="features__link" href="#blog" data-reveal>
          Request Early Access to Get Started
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="features__grid" data-reveal-group>
        {featuresData.map((feature) => (
          <div
            className="features__card"
            key={feature.id}
            onMouseMove={trackGlow}
          >
            <Feature title={feature.title} text={feature.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
