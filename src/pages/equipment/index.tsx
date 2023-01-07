import "./style.css";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BreadCrumb from "$components/breadcrumb";
import { useState } from "react";
import { Link } from "react-router-dom";
const index = () => {
  const items = [
    {
      title: '로버s',
      src: '/img/equipment/q-ma.png',
      link: ''
    },
    {
      title: 'EK43',
      src: '/img/equipment/q-mk.jpeg',
      link: ''
    },
    {
      title: '미토스원',
      src: '/img/equipment/q-va.png',
      link: ''
    },
    {
      title: '리네아 pb',
      src: '/img/equipment/q-lm.png',
      link: 'https://kr.lamarzocco.com/machine/linea-pb/'
    },
  ]
  const rostingItem = [
    {
      title: '이지스터-4kg lng',
      src: '/img/equipment/r-easy.png',
      link: 'https://www.easyster.co.kr/layout/4kg.html'
    },
    {
      title: 'nbp-nkic-5k',
      src: '/img/equipment/r-nbp.png',
      link: 'http://www.nbpkorea.co.kr/products/afterburner.php'
    },
    {
      title: 'nbp-nkic-5k',
      src: '/img/equipment/r-nbp.png',
      link: 'http://www.nbpkorea.co.kr/products/afterburner.php'
    },
    {
      title: 'nbp-nkic-5k',
      src: '/img/equipment/r-nbp.png',
      link: 'http://www.nbpkorea.co.kr/products/afterburner.php'
    },
  ]
  const [choice, setChoice] = useState(0)
  return (
    <div className="container my-10">
      <div className="mb-10">
        <div className="row">
          <BreadCrumb />
          <div className="display-5 mb-3 fw-bold">
            FAABS COFFEE'S EQUIPMENT
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="d-block overflow-hidden rounded-5 position-relative">
              <img src="img/equipment/merchines.jpeg" alt="" className="img-fluid img-zoom position-relative" />
              <a className="btn no-boader rounded-pill btn-primary position-absolute" style={{ top: '45%', left: '16%' }} onMouseOver={() => setChoice(0)}><i className="bx bx-plus fs-3"></i></a>
              <a className="btn no-boader rounded-pill btn-primary position-absolute" style={{ top: '40%', left: '34%' }} onMouseOver={() => setChoice(1)}><i className="bx bx-plus fs-3"></i></a>
              <a className="btn no-boader rounded-pill btn-primary position-absolute" style={{ top: '42%', left: '57%' }} onMouseOver={() => setChoice(2)}><i className="bx bx-plus fs-3"></i></a>
              <a className="btn no-boader rounded-pill btn-primary position-absolute" style={{ top: '40%', left: '80%' }} onMouseOver={() => setChoice(3)}><i className="bx bx-plus fs-3"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <a href={items[choice].link} className="p-3 rounded-3  mb-3 d-block text-dark position-relative">
              <Link to={items[choice].src} className="card-hover p-4 border hover-shadow-lg align-items-center rounded-3 hover-lift">
                <div className="rounded-3 flex-shrink-0 overflow-hidden">
                  <img src={items[choice].src} alt="" className="img-fluid img-zoom h-auto" style={{width: '320px'}} />
                </div>
                <div className=" h-100">
                  <div className="d-flex display-8 mb-3 justify-content-between">
                    <span className="d-inline-block text-secondary">
                      {items[choice].title}
                    </span>
                  </div>
                </div>
              </Link>
            </a>
          </div>
        </div>
        <div className="mt-10">
          <div className="display-5 mb-3 fw-bold">
            FAABS ROASTING'S EQUIPMENT
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
            spaceBetween={50}
            slidesPerView={2}
            mousewheel={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {rostingItem.map((item, i) => (
              <SwiperSlide key={i} className="mb-4 flex-grow-1 px-3 px-4 py-5 shadow rounded-4" style={{ width: '412px', marginRight: '30px', height: '312px' }}>
                <div className="mx-auto mb-0">
                  <img className="mx-auto" src={item.src} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default index;