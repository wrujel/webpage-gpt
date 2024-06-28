import { Footer, Blog, Possibility, Features, Main, Info } from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__main gradient__bg">
        <Navbar />
        <div className="app__main-section">
          <Main />
          <Brand />
        </div>
      </div>
      <Info />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
