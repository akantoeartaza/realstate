import '../index.css';
import '../grid.css';


function Services() {

 
        return (
          <section className="md-section" id="id3">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
                  <div className="sec-title sec-title__lg-title md-text-center">
                    <h2 className="sec-title__title">Our services</h2>
                    <span className="sec-title__divider"></span>
                  </div>
                </div>
              </div>
              <div className="row row-eq-height">
                {/* Service 1 */}
                <div className="col-sm-6 col-md-6 col-lg-4 ">
                  <div className="services">
                    <div className="services__img"><img src="assets/img/service/1.jpg" alt=""/></div>
                    <h2 className="services__title"><a href="#">General Contracting</a></h2>
                    <div className="services__desc">Curabitur elementum urna augue, eu porta purus gravida in. Cras consectetur, lorem a cursus vestibulum, ligula purus</div>
                    <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 ">
                  <div className="services">
                    <div className="services__img"><img src="assets/img/service/2.jpg" alt=""/></div>
                    <h2 className="services__title"><a href="#">Concept and Design</a></h2>
                    <div className="services__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ut lacus a tincidunt. Quisque luctus nibh augue, non</div>
                    <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
                  </div>
                </div>
                {/* Service 3 */}
      <div className="col-sm-6 col-md-6 col-lg-4 ">
        <div className="services">
          <div className="services__img"><img src="assets/img/service/3.jpg" alt=""/></div>
          <h2 className="services__title"><a href="#">Metal Roofing</a></h2>
          <div className="services__desc">Duis porttitor libero ac egestas euismod. Maecenas quis felis turpis. Nulla quis turpis sed augue egestas dapibus vel at</div>
          <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
        </div>
      </div>
      
      {/* Service 4 */}
      <div className="col-sm-6 col-md-6 col-lg-4 ">
        <div className="services">
          <div className="services__img"><img src="assets/img/service/4.jpg" alt=""/></div>
          <h2 className="services__title"><a href="#">Construction Consultant</a></h2>
          <div className="services__desc">Nam elit ligula, egestas et ornare non, viverra eu justo. Aliquam ornare lectus ut pharetra dictum. Aliquam erat</div>
          <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
        </div>
      </div>
      
      {/* Service 5 */}
      <div className="col-sm-6 col-md-6 col-lg-4 ">
        <div className="services">
          <div className="services__img"><img src="assets/img/service/5.jpg" alt=""/></div>
          <h2 className="services__title"><a href="#">Construction Consultant</a></h2>
          <div className="services__desc">Suspendisse ac elit vitae est lacinia interdum eu sit amet mauris. Phasellus aliquam nisi sit amet libero mattis ornare.</div>
          <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
        </div>
      </div>
      
      {/* Service 6 */}
      <div className="col-sm-6 col-md-6 col-lg-4 ">
        <div className="services">
          <div className="services__img"><img src="assets/img/service/6.jpg" alt=""/></div>
          <h2 className="services__title"><a href="#">General Builder</a></h2>
          <div className="services__desc">Integer placerat ullamcorper urna nec rhoncus. Sed velit justo, lacinia non sapien imperdiet, sagittis fringilla risus.</div>
          <a className="btn btn btn-primary btn-custom" href="service-single.html">read more</a>
        </div>
      </div>
      
              </div>
            </div>
          </section>
        );
      }
      


  export default Services;
  