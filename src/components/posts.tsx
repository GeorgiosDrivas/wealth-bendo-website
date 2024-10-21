import "../styles/posts.styles.css";

export default function Posts() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="numbers">
              <div>
                <h2>36K</h2>
                <p>Customers</p>
              </div>
              <div>
                <h2>28</h2>
                <p>Selections</p>
              </div>
              <div>
                <h2>14</h2>
                <p>Analysts</p>
              </div>
              <div>
                <h2>15</h2>
                <p>Global Assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="latest-posts">
              <h2>Latest Posts</h2>
              <div>
                <h5>Our recent articles </h5>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
