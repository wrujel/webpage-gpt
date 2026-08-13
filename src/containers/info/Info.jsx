import { useRef } from "react";
import { Feature } from "../../components";
import { useGSAP, reveals } from "../../lib/gsapSetup";
import "./Info.css";

const Info = () => {
  const scope = useRef(null);

  useGSAP(() => reveals(scope.current), { scope });

  return (
    <section className="info section__padding" id="info" ref={scope}>
      <div className="info__intro" data-reveal>
        <Feature
          title="What is GPT-Bot"
          text="GPT-Bot is an autonomous assistant robot and the most advanced model in the GPT series. He floats in the air, sees, listens and talks — a companion, not just a tool."
        />
      </div>

      <div className="info__layout">
        <div className="info__sticky">
          <h2 className="info__heading" data-split>
            The possibilities are beyond your imagination
          </h2>
          <a className="info__link" href="#blog" data-reveal>
            Explore The Library
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="info__cards" data-reveal-group>
          <div className="info__card">
            <Feature
              title="Natural Conversation"
              text="Talk to GPT-Bot like a friend. He understands context, remembers your preferences and responds in real time — from customer support to daily planning."
            />
          </div>
          <div className="info__card">
            <Feature
              title="Floating Knowledge Base"
              text="GPT-Bot hovers by your side with instant answers on nearly any topic — homework help, deep research, or settling dinner-table debates."
            />
          </div>
          <div className="info__card">
            <Feature
              title="Patient Tutor"
              text="He explains new concepts at your pace, quizzes you along the way, and turns boring lessons into missions worth finishing."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
