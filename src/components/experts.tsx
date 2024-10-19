import "../styles/experts.styles.css";

export default function Experts() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div id="experts-img">
              <div id="experts_svg" className="position-absolute">
                <img src="../assets/experts_svg.svg" alt="" />
              </div>
              <img src="../assets/experts_1.png" alt="Experts Image 1" />
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}
