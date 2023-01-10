import Hover from "$components/motion/hover";
import { archive } from "$types/archive";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Index = () => {
    const archives: archive[] = [
        {
            id: 1,
            title: null,
            subTitle: '',
            content: `
            FAABS는 다섯가지 커피맛 표현의 앞 철자를 조합하여 만든 단어입니다.
            Flavor/Aroma/Acidity/Body/Sweetness
            
            커피의 맛, 향, 산미, 바디감, 단맛의 적절한 조화 또는 강조를 통해 다양한 커피를 선보이고자 하는 것이 파브스 커피의 이름이 만들어진 이유입니다.
            
            파브스 커피는 커피 한잔이 주는 힘을 믿습니다. 그것은 사람과의 만남입니다.
            커피를 통해 전해지는 것은 마음과 마음입니다. 
            
            -직접 로스팅한 하우스 블랜딩 원두로 에스프레소 음료를 제공합니다.
            
            -매달 새로운 싱글 오리진 원두를 로스팅하여 필터커피로 제공합니다.
            
            -직접 만든 수제 디저트를 제공합니다.
            
            -창업컨설팅 / 로스팅 교육 / 퍼블릭커핑을 진행합니다.
            
            -사업자 원두 납품 문의 070-7755-6164
            `,
            img: '1.png',
        },
        {
            id: 3,
            title: 'title1',
            subTitle: 'sub',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: null
        }
    ]
    const { id } = useParams();
    return (
        <div className="container pt-14 pb-9 pb-lg-11 position-relative">
            <div className="col-lg-10 col-xl-8 mb-3">
                <div className="d-flex align-items-center w-100">
                    {/* <div className="badge bg-primary rounded-pill me-3">bean</div> */}
                    <small className="text-muted">FROM JUN. 2020</small>
                </div>
                <h2 className="display-3 fw-bold my-4">
                    FAABS COFFE ROASTERS
                </h2>
            </div>
            <article className="article">
                <div>
                    {/* <div className="title">{archive.title}</div>
                        <h2 className="sub-title">{archive.subTitle}</h2> */}
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <img className="center" src={"/img/about/1.png"} />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <img className="center" src={"/img/about/2.png"} />
                    </div>

                </div>
                <hr />
            </article>
            <article className="article">
                <div className="row">
                    <div className="content mb-2">
                        <span className="head-cap">
                            FAABS
                        </span>
                        는 다섯가지 커피맛 표현의 앞 철자를 조합하여 만든 단어입니다.
                        <br />
                        <div className="lead">
                            Flavor / Aroma / Acidity / Body / Sweetness
                        </div>
                    </div>
                    <div className="content fw-normal">
                        커피의 맛, 향, 산미, 바디감, 단맛의 적절한 조화 또는 강조를 통해 다양한 커피를 선보이고자 하는 것이 파브스 커피의 이름이 만들어진 이유입니다.
                        <br />
                        <br />
                        파브스 커피는 커피 한잔이 주는 힘을 믿습니다. 그것은 사람과의 만남입니다.
                        <br />
                        커피를 통해 전해지는 것은 마음과 마음입니다.
                        <br />
                        <br />
                        <ul className="list-unstyled text-dark">
                            {[
                                '직접 로스팅한 하우스 블랜딩 원두로 에스프레소 음료를 제공합니다.',
                                '매달 새로운 싱글 오리진 원두를 로스팅하여 필터커피로 제공합니다.',
                                '직접 만든 수제 디저트를 제공합니다.',
                                '창업컨설팅 / 로스팅 교육 / 퍼블릭커핑을 진행합니다.',
                                '사업자 원두 납품 문의 070-7755-6164'
                            ].map((item, i) => (
                                <li className="d-flex align-items-center mb-3" key={i}>
                                    <i className="bx bx-check-circle fs-4 opacity-50 me-2"></i>
                                    <span>
                                        {item}
                                    </span>
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div className="content lead mb-4">
                    </div>
                </div>
            </article>
        </div>);
};

export default Index;
