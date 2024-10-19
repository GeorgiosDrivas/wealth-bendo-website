import "./App.css";
import Brands from "./components/brands";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <main id="header">
        <Header />
      </main>
      <main id="brands">
        <Brands />
      </main>
      <main id="features" className="mb-5">
        <Features />
      </main>
      <main id="footer">
        <Footer />
      </main>
    </>
  );
}

export default App;
