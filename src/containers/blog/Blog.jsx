import { useRef } from "react";
import { Article } from "../../components";
import {
  gsap,
  useGSAP,
  reveals,
  isReducedMotion,
} from "../../lib/gsapSetup";
import { blog01, blog02, blog03, blog04, blog05 } from "./blog.data";
import "./Blog.css";

const articles = [
  {
    id: 1,
    imgUrl: blog01,
    date: "2026-07-08",
    title: "Inside GPT-Bot: How We Taught a Robot to Float",
  },
  {
    id: 2,
    imgUrl: blog02,
    date: "2026-07-01",
    title: "A Day With GPT-Bot: Your Assistant From Morning to Night",
  },
  {
    id: 3,
    imgUrl: blog03,
    date: "2026-07-15",
    title: "Voice, Vision and Personality: The Tech Behind GPT-Bot",
  },
  {
    id: 4,
    imgUrl: blog04,
    date: "2026-07-22",
    title: "Why Floating Robots Are the Future of Home AI",
  },
  {
    id: 5,
    imgUrl: blog05,
    date: "2026-07-29",
    title: "GPT-Bot in the Classroom: Tutoring, Reimagined",
  },
];

const Blog = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      reveals(scope.current);
      if (isReducedMotion()) return;

      // pinned horizontal filmstrip — desktop only
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const track = scope.current.querySelector(".blog__track");
        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, { x: () => -getDistance(), ease: "none" }, 0).fromTo(
          ".blog__progress-fill",
          { scaleX: 0 },
          { scaleX: 1, ease: "none" },
          0,
        );
      });
    },
    { scope },
  );

  return (
    <section className="blog" id="blog" ref={scope}>
      <div className="blog__pin">
        <div className="blog__header">
          <p className="eyebrow" data-reveal>
            Library
          </p>
          <h2 data-split>A lot is happening, We are blogging about it.</h2>
          <div className="blog__progress" aria-hidden="true">
            <div className="blog__progress-fill" />
          </div>
        </div>

        <div className="blog__track">
          {articles.map((article) => (
            <Article
              key={article.id}
              imgUrl={article.imgUrl}
              date={article.date}
              title={article.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
