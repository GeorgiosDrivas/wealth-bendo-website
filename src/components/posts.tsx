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
        <div className="row pb-5">
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
      <div className="container">
        <div className="row justify-content-around mt-5">
          <div className="col-4">
            <div className="single-post">
              <div className="single-post-img">
                <img src="../assets/posts/post_1.png" alt="" />
              </div>
              <div className="post-details d-flex justify-content-between pe-4 mt-4">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="author_img"
                    src="../assets/posts/post_author_1.jpg"
                    alt=""
                  />
                  <div className="position-relative author-name">
                    <h5 className="text-uppercase text-start m-0 ps-4 ">
                      David Ross
                    </h5>
                  </div>
                </div>
                <div>
                  <p className="m-0 text-uppercase category">Investing</p>
                  <p className="text-center text-uppercase mt-2">Sep 24</p>
                </div>
              </div>
              <h4>Investing Starters Advice 101</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="single-post">
              <div className="single-post-img">
                <img src="../assets/posts/post_2.png" alt="" />
              </div>
              <div className="post-details d-flex justify-content-between pe-4 mt-4">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="author_img"
                    src="../assets/posts/post_author_2.jpg"
                    alt=""
                  />
                  <div className="position-relative author-name">
                    <h5 className="text-uppercase text-start m-0 ps-4 ">
                      Sarah Mitchell
                    </h5>
                  </div>
                </div>
                <div>
                  <p className="m-0 text-uppercase category">Budgeting</p>
                  <p className="text-center text-uppercase mt-2">Sep 24</p>
                </div>
              </div>
              <h4>How Much Money Should I Save?</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="single-post">
              <div className="single-post-img">
                <img src="../assets/posts/post_3.png" alt="" />
              </div>
              <div className="post-details d-flex justify-content-between pe-4 mt-4">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="author_img"
                    src="../assets/posts/post_author_3.jpg"
                    alt=""
                  />
                  <div className="position-relative author-name">
                    <h5 className="text-uppercase text-start m-0 ps-4 ">
                      John Smith
                    </h5>
                  </div>
                </div>
                <div>
                  <p className="m-0 text-uppercase category">Strategies</p>
                  <p className="text-center text-uppercase mt-2">Sep 24</p>
                </div>
              </div>
              <h4>How to Diversify Your Portfolio</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
