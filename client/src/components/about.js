import '../index.css';
import '../grid.css';


function About() {

        return (
          <section className="md-section" id="id2" style={{ backgroundColor: "#fff", padding: "60px 0" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-30">
                    <div className="sec-title sec-title__lg-title">
                      <h2 className="sec-title__title">About <span>Yellow Helmet</span></h2>
                      <span className="sec-title__divider"></span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <br />
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                    <br /><br />
                    <a className="btn btn-primary btn-outline" href="#">More about us</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about">
                    <img src="assets/img/about/2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
  };


  export default About;
  