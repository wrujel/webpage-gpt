import { Feature } from "../../components";
import "./Info.css";

const Info = () => {
  return (
    <div className="web__info section__margin" id="info">
      <div className="web__info-feature">
        <Feature
          title="What is GPT-4o"
          text="GPT-4o is a powerful AI model that can generate human-like text. It is the fourth iteration of the GPT series and is the most advanced model yet."
        />
      </div>
      <div className="web__info-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <span>Explore The Library</span>
      </div>
      <div className="web__info-container">
        <Feature
          title="ChatBots"
          text="Create ChatBots that can interact with users in a natural way and provide assistance in real-time. This can be used for customer support, sales, and more."
        />
        <Feature
          title="Knowledge Base"
          text="Build a knowledge base that can answer questions and provide information on a wide range of topics. This can be used for customer support, education, and more."
        />
        <Feature
          title="Education"
          text="Create educational content for students and teachers. This can include textbooks, quizzes, and more. GPT-4o can help students learn new concepts and teachers create engaging lessons."
        />
      </div>
    </div>
  );
};

export default Info;
