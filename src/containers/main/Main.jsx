import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="web__header section__padding" id="home">
      <div className="web__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-4o
        </h1>
        <p>
          GPT-4o is a powerful AI tool that can help you create amazing content
          with the help of AI. Get started with GPT-4o today and start creating
          amazing content.
        </p>
        <div className="web__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="web__header-content__people">
          <img src={people} alt="people" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="web__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Main;
