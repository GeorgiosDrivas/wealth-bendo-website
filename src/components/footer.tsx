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
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}
