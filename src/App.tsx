import "./App.css";
import Brands from "./components/brands";
import Experts from "./components/experts";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Posts from "./components/posts";

function App() {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="features" className="mb-5">
        <Features />
      </section>
      <section id="experts" className="py-5 mb-5">
        <Experts />
      </section>
      <section id="posts" className="py-5">
        <Posts />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
