import BreadCrumb from "$components/breadcrumb";
import React, { useState } from "react";
import "./style.css";

const PTitle = ({ no, title }: any) => {
    const titles = [
        <section className="bg-dark text-white position-relative">
            <div className="container pt-14 pb-9 pb-lg-11 position-relative z-index-1">
                <div className="row pt-lg-9 pb-lg-5 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 col-xl-7 z-index-2">
                        <div className="position-relative">
                            <div>
                                <nav className="d-flex justify-content-center" aria-label="breadcrumb">
                                    <BreadCrumb />
                                </nav>
                                <h1 className="mb-0 display-4">
                                    {title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ,
        <section className="position-relative design-theme">
            <div className="container py-9">
                <div className="row align-items-center">
                    <div className="col-md-7 mb-4 mb-md-0">

                        <h1 className="mb-0 display-5">
                            {title}
                        </h1>
                    </div>
                    <div className="col-md-5">
                        <div>
                            <nav className="d-flex justify-content-md-end" aria-label="breadcrumb">
                                <BreadCrumb />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        ,
        <section className="position-relative">
            <div className="container py-9">
                <div className="bg-shade-primary rounded-4 text-white py-5 px-4">
                    <div className="row align-items-center">
                        <div className="col-md-7 mb-4 mb-md-0">
                            <h1 className="mb-0 display-6">
                                {title}
                            </h1>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <nav className="d-flex justify-content-md-end" aria-label="breadcrumb">
                                    <BreadCrumb />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        ,
        <section className="position-relative bg-light">
            <div className="container py-9">
                <div className="row align-items-center">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <div>
                            <nav className="d-flex justify-content-center mb-2" aria-label="breadcrumb">
                                <BreadCrumb />
                            </nav>
                            <h1 className="mb-0 display-5">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        ,
        <section className="position-relative bg-white">
            <div className="container py-9">
                <div className="row">
                    <div className="col-md-7">

                        <h1 className="mb-4 display-5">
                            {title}
                        </h1>
                        <nav className="d-flex" aria-label="breadcrumb">
                            <BreadCrumb />
                        </nav>
                    </div>
                </div>
            </div>

        </section>
        ,
        <section className="position-relative bg-white bg-shade-primary text-white bg-repeat" style={{ "backgroundImage": "url(img/bg-element2.svg)" }}>
            <div className="container py-9 py-lg-11 position-relative">
                <div className="row">
                    <div className="col-md-7">

                        <h1 className="mb-4 display-5">
                            {title}
                        </h1>
                        <nav className="d-flex">
                            <BreadCrumb />
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        ,
    ]
    return (
        <div>
            {titles[no]}
        </div>
    );
};

export default PTitle;
