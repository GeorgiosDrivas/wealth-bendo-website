import "../styles/brands.styles.css";

export default function Brands() {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12">
            <div className="brands-wrap d-flex justify-content-between align-items-center">
              <img src="../assets/brands/brand_1.png" alt="Load brand" />
              <img src="../assets/brands/brand_2.png" alt="Chain brand" />
              <img src="../assets/brands/brand_3.png" alt="Scale brand" />
              <img src="../assets/brands/brand_4.png" alt="Trace brand" />
            </div>
            <div className="brands-wrap d-flex justify-content-between align-items-center">
              <img src="../assets/brands/brand_4.png" alt="Load brand" />
              <img src="../assets/brands/brand_3.png" alt="Chain brand" />
              <img src="../assets/brands/brand_2.png" alt="Scale brand" />
              <img src="../assets/brands/brand_1.png" alt="Trace brand" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
