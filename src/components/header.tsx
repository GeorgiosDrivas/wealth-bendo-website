import "../styles/header.styles.css";

export default function Header() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-6">
            <div id="logo">
              <img src="./assets/logo.png" alt="Logo" />
            </div>
          </div>
          <div className="col-6">
            <ul
              id="header-nav"
              className="d-flex justify-content-around align-items-center"
            >
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
