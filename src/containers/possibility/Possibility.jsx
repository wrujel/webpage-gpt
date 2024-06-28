import possibilityImage from "../../assets/possibility.png";
import "./Possibility.css";

const Possibility = () => {
  return (
    <div className="web__possibility section__padding" id="possibility">
      <div className="web__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="web__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          With GPT-4, the limits of what you can achieve are only constrained by
          your imagination. Whether you&apos;re looking to revolutionize
          customer service with intuitive ChatBots, generate high-quality
          content in a fraction of the time, or create personalized experiences
          that resonate with your audience, GPT-4 has you covered.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
