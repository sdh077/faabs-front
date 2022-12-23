import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"
import './style.css'
import FadeIn from '$components/motion/fadein';
import Scroll from '$components/motion/scroll';

function ICarousel() {
  return (
    <Carousel className='position-relative overflow-hidden bg-image carousel-custom'>
      <Carousel.Item className='bg-dark position-relative'>
        <img
          className="d-block w-100 opacity-25"
          src="img/1.jpg"
          alt="First slide"
        />
        <div className='position-absolute text'>
          <FadeIn title={"Amsterdam Zuid nightwalk"} titleWidth={2} />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-dark'>
        <img
          className="d-block w-100 opacity-25"
          src="https://uigator.com/assan/4.8.5/public/assets/img/backgrounds/bg5.jpg"
          alt="Second slide"
        />
        <div className='position-absolute text c-text'>
          <Scroll text={"Designed for Faabs"} img={null} direction={'right'} value={300} />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-dark'>
        <img
          className="d-block w-100 opacity-25"
          src="https://uigator.com/assan/4.8.5/public/assets/img/backgrounds/bg6.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ICarousel;