import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <section
        id="header"
        className="d-flex justify-content-center align-items-center"
      >
        <Header />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
