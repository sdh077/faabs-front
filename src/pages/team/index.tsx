import React, { useState } from "react";
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import "./style.css";


const Index = () => {
    return (
        <ParallaxProvider>
            <div className="">
                <section>
                    <div className="text-center">
                        <ParallaxProvider>
                            <ParallaxBanner
                                layers={[{ image: '/img/1.jpg', speed: -15 }]}
                                className="aspect-[2/1] banner-img">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h1 className="text-8xl text-white font-thin fw-bold">Get in touch with us</h1>
                                    <h3 className="text-2xl text-white font-thin"></h3>
                                </div>
                            </ParallaxBanner>
                        </ParallaxProvider>
                    </div>
                </section>
                <section>
                    <div className="sectionWrap">
                        <div data-aos="fade-right" data-aos-delay="250" className="section aos-init aos-animate">
                            <img src="img/people/1.jpeg" className="peopleImg rotation" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="250" className="aos-init aos-animatesection">
                            <div className="title">
                                Content
                            </div>
                            <div className="sub-title">
                                Quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className="content">
                                Content creation
                                Copywriting
                                Content analysis
                                Content strategy
                                Content management systems (CMS)
                            </div>
                        </div>
                    </div>
                    <div className="sectionWrap">
                        <div data-aos="fade-left" data-aos-delay="250" className="aos-init aos-animatesection">
                            <div className="title">
                                Content
                            </div>
                            <div className="sub-title">
                                Quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className="content">
                                Content creation
                                Copywriting
                                Content analysis
                                Content strategy
                                Content management systems (CMS)
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="250" className="section aos-init aos-animate">
                            <img src="/img/people/2.jpeg" className="peopleImg" />
                        </div>
                    </div>
                    <div className="sectionWrap">
                        <div data-aos="fade-right" data-aos-delay="250" className="section aos-init aos-animate">
                            <img src="/img/people/1.jpeg" className="peopleImg rotation" />
                        </div>
                        <div data-aos="fade-left" data-aos-delay="250" className="aos-init aos-animatesection">
                            <div className="title">
                                Content
                            </div>
                            <div className="sub-title">
                                Quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className="content">
                                Content creation
                                Copywriting
                                Content analysis
                                Content strategy
                                Content management systems (CMS)
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ParallaxProvider>
    );
};

export default Index;
