import "../styles/features.styles.css";

export default function Features() {
  return (
    <>
      <div className="container h-100">
        <div className="row px-5 h-100">
          <div className="col-6 p-0">
            <div id="left-feature" className="d-grid">
              <div className="d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 321 342"
                  fill="none"
                >
                  <path
                    d="M0.948242 341.806V213.806H64.9482V341.806H0.948242ZM128.948 341.806V107.14H192.948V341.806H128.948ZM256.948 341.806V0.473114H320.948V341.806H256.948Z"
                    fill="#050505"
                  />
                </svg>
                <h2>
                  2X <br /> SPY
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
              <div className="row">
                <div className="col-6">
                  <div
                    id="right-feature-one"
                    className="whitesmoke right-top-feature h-100"
                  >
                    <p>Returns</p>
                    <b>114%</b>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    id="right-feature-one"
                    className="whitesmoke right-top-feature h-100"
                  >
                    <p>Capture</p>
                    <b>Gains</b>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    id="right-feature-one"
                    className="black-bg right-bottom-feature h-100 mt-3"
                  >
                    Real time
                    <p className="text-uppercase text-center">
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
