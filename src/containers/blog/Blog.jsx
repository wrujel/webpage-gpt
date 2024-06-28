import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./blog.data";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="web__blog section__padding" id="blog">
      <div className="web__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="web__blog-container">
        <div className="web__blog-container__main">
          <Article
            imgUrl={blog01}
            title="Exploring the Future of AI: The Endless Possibilities of GPT-4"
            date="2024-07-08"
          />
        </div>
        <div className="web__blog-container__secondary">
          <Article
            imgUrl={blog02}
            title="Harnessing the Power of GPT-4 for Business Automation"
            date="2024-07-01"
          />
          <Article
            imgUrl={blog03}
            title="Content Creation Made Easy: How GPT-4 is Changing the Game"
            date="2024-07-15"
          />
          <Article
            imgUrl={blog04}
            title="Transforming Customer Service with AI: A Deep Dive into GPT-4"
            date="2024-07-22"
          />
          <Article
            imgUrl={blog05}
            title="Enhancing User Experience: The Role of GPT-4 in Web Development"
            date="2024-07-29"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
