import "../styles/newsLetter.styles.css";

export default function NewsLetter() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="news-wrap d-flex flex-column justify-content-center align-items-center">
              <h2>
                <b>Expert </b>Stock Analysis
              </h2>
              <p>
                Subscribe alongside tens of thousands of investors and
                <br />
                immediately receive expert up-to-date stock picks.
              </p>
              <div className="news-inputs-wrap">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <input type="button" value="→" className="news-input-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
