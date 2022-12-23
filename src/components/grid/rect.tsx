import Hover from "$components/motion/hover";
import React, { useEffect, useState } from "react";
import "./style.css";
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
const Rect = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const items = [
        {
            link: '',
            img: 'img/projects/1.jpeg',
            title: 'Mirror Website',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: '3D, Illustrations, Motion'
        },
        {
            link: '',
            img: 'img/projects/5.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'Product Design, UI UX'
        },
        {
            link: '',
            img: 'img/projects/2.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: '',
            tag: ''
        },
        {
            link: '',
            img: 'img/projects/4.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: ''
        },
        {
            link: '',
            img: 'img/projects/contact.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'tag'
        },
        {
            link: '',
            img: 'img/projects/bean.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'tag'
        }
    ]
    return (
        <section className="position-relative hr-linear-bottom bg-white">
            <div className="container-fluid py-9 py-lg-11 position-relative z-index-1">
                <div id="projects" className="row g-2" role="tabpanel" style={{ "position": "relative", height: windowSize.innerWidth / 4 * (parseInt(String(items.length / 4))*2) }}>
                    {items.map((item, i) => (
                        <div className="col-md-6 col-lg-3 development grid-item position-absolute" style={{ "left": windowSize.innerWidth / 4 * (i % 4), "top": windowSize.innerWidth / 4 * parseInt(String(Number(i / 4))) }}>
                            <a href="#!" className="text-white bg-dark position-relative d-block overflow-hidden card-hover-2" style={{maxHeight: windowSize.innerWidth / 4}}>
                                <img src={item.img} alt="" className="w-100 img-zoom" />
                                <div className="card-hover-2-overlay position-absolute start-0 top-0 w-100 h-100 d-flex px-4 py-5 flex-column justify-content-between">
                                    <div className="card-hover-2-header w-100">
                                        <div className="card-hover-2-title">
                                            <h5 className="fs-5 mb-2">{item.title}</h5>
                                        </div>
                                        <p className="mb-0">
                                            {item.subTitle}
                                        </p>
                                    </div>
                                    <div className="card-hover-2-footer w-100 mt-auto">
                                        <span className="tags d-block flex-grow-1">{item.tag}</span>
                                        <span className="card-hover-2-footer-link">
                                            <span>View case study</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Rect;
