import '../index.css';
import '../grid.css';


function Contact() {


        return (
          <section className="md-section container" id="id7" style={{backgroundColor: '#fff', padding: '60px 0 0'}}>
            <div className="row">
              <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
                <div className="sec-title sec-title__lg-title md-text-center">
                  <h2 className="sec-title__title">Contact us</h2><span className="sec-title__divider"></span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-9  col-lg-push-3">
                  <div className="main-content">
                    <div className="row"> 
                      <div className="col-lg-6 ">
                        <form className="contact-form">
                          <div className="form-item">
                            <input className="form-control" type="text" name="input" placeholder="name"/>
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="input" placeholder="email"/>
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="input" placeholder="phone"/>
                          </div>
                          <div className="form-item">
                            <input className="form-control" type="text" name="input" placeholder="subject"/>
                          </div>
                          <div className="form-item">
                            <textarea name="message" placeholder="Message" style={{height: '150px'}}></textarea>
                          </div>
                          <button className="btn btn-primary btn-round mb-30" type="submit">Send message</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  col-lg-pull-9">
                  <div className="sidebar">
                    <section className="widget">
                      <div className="sec-title">
                        <h2 className="sec-title__title">working hours</h2><span className="sec-title__divider"></span>
                      </div>
                      <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ad sunt est. Eaque odit, et nihil saepe. Eveniet autem, sit quisquam iusto soluta assumenda impedit possimus nesciunt fugiat aut in.</p>
                      <div>
                        <div className="widget-contact__item"><span className="widget-contact__title">Tel:</span>
                          <p className="widget-contact__text">+44 1632 960422</p>
                        </div>
                        <div className="widget-contact__item"><span className="widget-contact__title">email:</span>
                          <p className="widget-contact__text"><a href="#">info@awe7.com</a></p>
                        </div>
                        <div className="widget-contact__item"><span className="widget-contact__title">Working Hours</span>
                          <p className="widget-contact__text">Mon - Sat: 9:00 - 18:00</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      };


  export default Contact;
  