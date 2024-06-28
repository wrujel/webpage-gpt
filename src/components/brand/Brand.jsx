import { google, slack, atlassian, dropbox, shopify } from "./brand.data";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="web__brand section__padding">
      <ul>
        <li>
          <img src={google} alt="google" />
        </li>
        <li>
          <img src={slack} alt="slack" />
        </li>
        <li>
          <img src={atlassian} alt="atlassian" />
        </li>
        <li>
          <img src={dropbox} alt="dropbox" />
        </li>
        <li>
          <img src={shopify} alt="shopify" />
        </li>
      </ul>
    </div>
  );
};

export default Brand;
