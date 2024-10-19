import "../styles/experts.styles.css";

export default function Experts() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 pe-5">
            <div id="experts-img">
              <div id="experts_svg" className="position-absolute">
                <img src="../assets/experts_svg.svg" alt="" />
              </div>
              <img src="../assets/experts_1.png" alt="Experts Image 1" />
            </div>
          </div>
          <div className="col-6">
            <div className="experts-content">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="experts-symbol"
                  src="../assets/experts_content_svg.svg"
                  alt=""
                />
                <p className="text-uppercase m-0">Experts</p>
              </div>
              <h2>
                <b>
                  Our Team Of
                  <br /> Experienced
                </b>
                <br /> Analysts.
              </h2>
              <p>
                Leverage cutting-edge technology and in-depth market <br />
                knowledge to identify potential trading opportunities
              </p>
              <button className="text-uppercase button">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
