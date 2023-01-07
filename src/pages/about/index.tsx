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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: '1.jpg',
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
                    <div className="badge bg-primary rounded-pill me-3">bean</div>
                    <small className="text-muted">02 May. 2021</small>
                </div>
                <h2 className="display-3 fw-bold my-4">
                    Smoothly rolling out pricing changes is hard.
                </h2>
            </div>
            {archives.map((archive) => (
                <article key={archive.id} className="article">
                    <div>
                        <div className="title">{archive.title}</div>
                        <h2 className="sub-title">{archive.subTitle}</h2>
                    </div>
                    {archive.img && (<div>
                        <div>
                            <img className="center" src={"/img/" + archive.img} />
                        </div>
                    </div>)}
                    <div className="content lead mb-4 dropcap">{archive.content}</div>
                    <hr />
                </article>
            ))}
            <section className="position-relative overflow-hidden">
                <div className="container py-9 py-lg-11">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mb-4">
                                <a href="#!" className="card-hover p-4 border d-flex flex-row hover-shadow-lg align-items-center rounded-3 hover-lift">
                                    <div className="me-4 rounded-3 flex-shrink-0 overflow-hidden">
                                        <img src="/img/projects/1.jpeg" alt="" className="img-fluid img-zoom h-auto width-10x" />
                                    </div>
                                    <div className="flex-grow-1 h-100">
                                        <div className="d-flex small mb-3 justify-content-between">
                                            <span className="d-inline-block me-2 small text-danger">

                                                Business
                                            </span>
                                            <span className="text-muted small">19 Aug.</span>
                                        </div>
                                        <h5 className="mb-0">
                                            How to configure output css files from sass
                                        </h5>
                                    </div>
                                </a>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mb-4">
                            <a href="#!" className="card-hover p-4 border d-flex flex-row hover-shadow-lg align-items-center rounded-3 hover-lift">
                                <div className="me-4 rounded-3 flex-shrink-0 overflow-hidden">
                                    <img src="/img/projects/2.jpeg" alt="" className="img-fluid img-zoom h-auto width-10x" />
                                </div>
                                <div className="flex-grow-1 h-100">
                                    <div className="d-flex small mb-3 justify-content-between">
                                        <span className="d-inline-block me-2 small text-success">

                                            Business
                                        </span>
                                        <span className="text-muted small">19 Aug.</span>
                                    </div>
                                    <h5 className="mb-0">
                                        How to configure output css files from sass
                                    </h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
};

export default Index;
