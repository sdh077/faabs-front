import ICarousel from "$components/carousel";
import IModal from "$components/modal";
import Modal from "$components/modal";
import Scroll from "$components/motion/scroll";
import IVideo from "$components/video";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import './style.css';
import Animation from '$components/animation'

const Index = () => {
  return (
    <div className="">
      <ICarousel />
      <div className="position-relative">
        <div className="container py-9 py-lg-11 border-bottom">
          <div className="col-lg-10 col-xl-8 mx-auto text-center">
            <Scroll text={null} img={null} direction={'down'} value={10} >
              <>
                <span className="h6 text-muted">
                  welcome
                </span>
                <h2 className="display-5">
                  Reimagine your product with forward-thinking solutions
                </h2>
              </>
            </Scroll>
          </div>
        </div>
        <div className="border-bottom">
          <div className="container py-9 py-lg-11 position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="w-100 h-50 align-items-center py-20">
                  <Animation type={'fade-right'}>
                    <img src={'img/contact.jpeg'} />
                  </Animation>
                </div>
              </div>
              <div className="col-lg-6 pl-10">
              <Animation type={'fade-left'}>
                  <div className="mx-auto py-20">
                    <span className="h6 text-muted">
                      WHY CHOOSE US?
                    </span>
                    <h2 className="display-5 mb-7">
                      Designed for developers
                    </h2>
                    <div className="mb-5">
                      <h3>
                        500+ Reusable components
                      </h3>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis.
                      </div>
                    </div>
                    <div className="mb-5">
                      <h3>
                        500+ Reusable components
                      </h3>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis.
                      </div>
                    </div>
                  </div>
                </Animation>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom">
          <div className="container position-relative py-9 py-lg-11">
            <div className="row align-items-center">
              <div className="col-lg-6 py-10 pl-10">
                <Scroll direction={'down'} value={100}>
                  <div className="row">
                    <h3 className="display-5 mb-5 fw-bold">
                      We believes in the power of creativity and posibilities.
                    </h3>
                    <div className="position-relative pb-2 rounded-4 overflow-hidden col-md-5 mb-5">
                      <div className="position-relative bg-light p-4 rounded-4">
                        <div className="count-text">
                          <CountUp end={100} duration={3} />
                        </div>
                        <div className="count-under-text">
                          Copies sold
                        </div>
                      </div>
                    </div>
                    <div className="position-relative pb-2 rounded-4 overflow-hidden col-md-5 mb-5">
                      <div className="position-relative bg-light p-4 rounded-4">
                        <div className="count-text">
                          <CountUp end={533} duration={3} />
                        </div>
                        <div className="count-under-text">
                          Copies sold
                        </div>
                      </div>
                    </div>
                    <div className="position-relative pb-2 rounded-4 overflow-hidden col-md-5 mb-5">
                      <div className="position-relative bg-light p-4 rounded-4">
                        <div className="count-text">
                          <CountUp end={2301} duration={3} />
                        </div>
                        <div className="count-under-text">
                          Copies sold
                        </div>
                      </div>
                    </div>
                    <div className="position-relative pb-2 rounded-4 overflow-hidden col-md-5 mb-5">
                      <div className="position-relative bg-light p-4 rounded-4">
                        <div className="count-text">
                          <CountUp end={81} duration={3} />
                        </div>
                        <div className="count-under-text">
                          Copies sold
                        </div>
                      </div>
                    </div>
                  </div>
                </Scroll>
              </div>
              <div className="mb-6 mb-lg-0 col-md-5 pe-md-7 pe-5 pb-5 order-lg-last ms-lg-auto position-relative">
                <div className="align-items-center text-center justify-center">
                  <IModal title={"title"} button={
                    <div data-glightbox="" data-gallery="g1" className="play-btn btn-white p-0 rounded-circle width-10x height-10x flex-center mx-auto mb-5 position-absolute video-style btn-circle-ripple" >
                      <i className='bx bx-play i-size'></i>
                    </div>
                  }
                    content={
                      <>
                        <IVideo link={"jQzERBmFcbY"} type={"youtube"} />
                      </>
                    }
                  ></IModal>
                  <img src="https://uigator.com/assan/4.8.5/public/assets/img/960x1440/1.jpg" className="img-fluid shadow-lg rounded-block rounded-top-start-0 rounded-bottom-end-0 position-relative" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Index;
