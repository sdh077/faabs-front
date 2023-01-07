import React, { useState } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import "./style.css";
import './script.js'
import './choices.min.js'
const Index = () => {
    const txt = [
        {
            title: `Bean`,
            content: `파브스의 커피는 해마다 각기 다른 대륙에서 재배 및 수확되며, 가장 적절한 시기에 가공되어 공급됩니다.
            다양한 산지와 품종에 대한 데이터를 바탕으로, 각 파트너들을 위한 맞춤형 커피원두와 상품을 제작하고 있습니다.`
        },
        {
            title: `납품문의 및 상담신청
            `,
            content: `
            Tel.  010-2956-6164 /  (*상담 운영시간 8:00 - 17:00) 

            방문. 서울시 새절역
            `,
        }
    ]
    return (
        <div>
            <div className="col-md-12 position-relative pt-12 pb-9 main">
                <div className="container">
                    <div className="display-3 mb-3 fw-bold">
                        Get in touch with us
                    </div>
                    <div>
                        Do you have questions about our products or need a quote? Use the contact form below and we will get back to you.
                    </div>
                </div>
            </div>
            <div className="container wrap">
                <div className="row">
                    <div className="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
                        <form className="form">
                            <h1 className="h1">
                                Contact form
                            </h1>
                            <p className="mb-3 w-lg-75">
                                Use the contact form if you have questions about our products. Our sales team will
                                be happy to help you:
                            </p>
                            <div className="choices" data-type="select-one" tabIndex={0} role="listbox" aria-haspopup="true" aria-expanded="false">
                                    <select id="chBasic" className="form-control" data-choices='{"searchEnabled":false, "allowHTML":true,"itemSelectText":""}'>
                                        <option value="" disabled>Select User</option>
                                        <option value="Adam">원두 납품</option>
                                        <option value="Mark">지원하기</option>
                                        <option value="John">John</option>
                                        <option value="Varun">Varun</option>
                                        <option value="Joseph">Joseph</option>
                                        <option value="Smith">Smith</option>
                                    </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div>
                            {txt.map((t, idx) => (
                                <div className="contact-text mb-0" key={idx}>
                                    <h4>{t.title}</h4>
                                    <div>{t.content}</div>
                                    <div className="border-top border-2 border-secondary mb-4 mt-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </div>
        </div >

    );
};

export default Index;
