import { Feature } from "../../components";
import "./Features.css";

const featuresData = [
  {
    id: 1,
    title: "Advanced Language Understanding",
    text: "Leverage GPT-4's cutting-edge natural language processing capabilities to understand and generate human-like text with remarkable accuracy. Perfect for applications ranging from ChatBots to content creation.",
  },
  {
    id: 2,
    title: "Customizable Responses",
    text: "Tailor GPT-4's responses to fit your specific needs. Whether you're developing a personalized customer service bot or a unique voice for your brand, GPT-4 offers unparalleled flexibility and adaptability.",
  },
  {
    id: 3,
    title: "Seamless Integration",
    text: "Easily integrate GPT-4 with your existing systems and platforms using our robust API. Enjoy a smooth and hassle-free setup process that gets you up and running in no time.",
  },
  {
    id: 4,
    title: "Continuous Learning and Improvement",
    text: "Benefit from GPT-4's ongoing advancements in machine learning. Our model continually evolves, incorporating new data and insights to provide you with the most accurate and relevant responses possible.",
  },
];

const Features = () => {
  return (
    <div className="web__features section__padding" id="features">
      <div className="web__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today and Make it Happen.
        </h1>
        <span>Request Early access to Get Started</span>
      </div>
      <div className="web__features-container">
        {featuresData.map((feature) => (
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
