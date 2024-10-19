import "../styles/footer.styles.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="footer-social" id="logo">
              <img src="./assets/logo.png" className="footer-logo" alt="Logo" />
              <div id="socials" className="d-flex justify-content-between">
                <a href="#">
                  <img src="./assets/socials/socials_youtube.png" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/socials/socials_instagram.png" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/socials/socials_tiktok.png" alt="" />
                </a>
              </div>
              <p>
                Navigate the Markets,
                <br /> Secure Your Future.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div
              id="footer-nav"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="d-flex flex-column justify-content-center align-items-center footer-single-nav">
                <h5>MAIN</h5>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center  footer-single-nav">
                <h5>PAGES</h5>
                <a href="#">Contact</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center  footer-single-nav">
                <h5>UTILITIES</h5>
                <a href="#">Style Guide</a>
                <a href="#">Instructions</a>
                <a href="#">Licenses</a>
                <a href="#">Changelog</a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-line"></div>
        <div className="row">
          <div className="col-6">
            <p>© 2024 Wealth Bento. All Rights Reserved.</p>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between align-items-center">
              <p>Powered By Webflow Built By Rick Mummery</p>
              <p>Built By Rick Mummery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
