import "../styles/features.styles.css";

export default function Features() {
  return (
    <>
      <div className="container h-100">
        <div className="row px-5 h-100">
          <div className="col-6 d-flex justify-content-end">
            <div id="left-feature" className="d-grid">
              <div className="px-5 d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="feature-svg"
                  viewBox="0 0 321 342"
                  fill="none"
                >
                  <path
                    d="M0.948242 341.806V213.806H64.9482V341.806H0.948242ZM128.948 341.806V107.14H192.948V341.806H128.948ZM256.948 341.806V0.473114H320.948V341.806H256.948Z"
                    fill="#050505"
                  />
                </svg>
                <h2 id="feature-heading-2">
                  2X <br /> <span>SPY</span>
                </h2>
              </div>
              <div id="left-feature-p" className="align-self-end">
                <p className="text-uppercase">
                  Cumulative Returns of Double the S&P 500
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div id="feature-right" className="h-100">
              <div className="row h-100">
                <div className="col-6">
                  <div
                    id="right-feature-one"
                    className="whitesmoke right-top-feature h-100 d-flex justify-content-evenly align-items-start flex-column"
                  >
                    <p className="text-uppercase">Returns</p>
                    <p className="text-uppercase bold-text">
                      <b>
                        114<span>%</span>
                      </b>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    id="right-feature-one"
                    className="whitesmoke right-top-feature h-100 d-flex justify-content-evenly align-items-start flex-column"
                  >
                    <p className="text-uppercase">Capture</p>
                    <p className="text-uppercase bold-text">
                      <b>Gains</b>
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    id="right-feature-one"
                    className="black-bg right-bottom-feature h-100 mt-3 d-grid"
                  >
                    Real time
                    <p className="text-uppercase text-center align-self-end">
                      Alerts to safely participate in the market
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
