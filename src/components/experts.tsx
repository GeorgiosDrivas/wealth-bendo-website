import "../styles/experts.styles.css";

export default function Experts() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-5">
            <div id="experts-img">
              <div id="experts_svg" className="position-absolute">
                <img src="../assets/experts_svg.svg" alt="" />
              </div>
              <img src="../assets/experts_1.png" alt="Experts Image 1" />
            </div>
          </div>
          <div className="col-6 ps-5 ms-5">
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
              <button className="text-uppercase button position-relative">
                Explore
                <div className="btn-arrow-bg position-absolute"></div>
                <svg
                  className="position-absolute btn-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.9 13.5L0.5 12.1L10.1 2.5H1.5V0.5H13.5V12.5H11.5V3.9L1.9 13.5Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
