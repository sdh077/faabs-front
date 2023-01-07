import "./style.css";

const index = () => {
  return (
    <div>
      <section className="my-5">
        <div className="container">
          <div className="display-7">
            네스프레소보다 저렴한 카페 커피
          </div>
          <div className="row">
            <div className="col-md-6 p-4">
              <img src="/img/bean/1.webp" />
            </div>
            <div className="col-md-6 p-7">
              <div className="display-8 mb-1">
                더 합리적인 가격으로,
                <br />
                신선한 원두를 즐겨보세요!
              </div>
              <div className="display-8 lead mb-1">
                빈브라더스 오피스 커피 솔루션은 네스프레소 캡슐 커피보다  잔당 가격이 저렴합니다.
              </div>
              <br />
              <div className="display-8 lead mb-1">
                이제 더이상 매일의 캡슐 분배를 신경쓰거나,
                <br />
                캡슐이 캡슐 머신에 걸릴까봐 걱정하지 마세요
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 bg-gray-200">
        <div className="container pt-8 pb-3">
          <div className="display-7">
            약정없는 커피 머신
          </div>
          <div className="row align-items-center justify-content-between my-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
            <div className="col-lg-5 me-auto order-last position-relative z-index-1">
              <h2 className="mb-4 mb-lg-5 position-relative display-5" >머신은 렌탈 혹은 구매 모두 가능합니다.</h2>
              <h6 className="mb-3 text-muted aos-init">렌탈은 약정 기간이 따로 없으며,언제든지 해지 가능합니다.</h6>
              <p className="mb-5">
                <h4 className="display-7 mb-2">
                  일시 구매 시: 68만원 (vat 포함)
                </h4>
                <li className="d-inline-flex me-3 mb-3 align-items-center">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle"></i>
                  </div>
                  <p>1년 무상 AS</p>
                </li>
                <li className="d-inline-flex me-3 mb-3 align-items-center">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle"></i>
                  </div>
                  <p>이후에는 부품비/출장비가 청구됩니다.</p>
                </li>
              </p>
              <p className="mb-5">
                <h4 className="display-7 mb-2">
                  렌탈 시: 월 3.9만원 (vat 포함)
                </h4>
                <li className="d-inline-flex me-3 mb-3 align-items-center">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle"></i>
                  </div>
                  <p>렌탈 기간 동안 쭉 무상 AS 진행</p>
                </li>
                <li className="d-inline-flex me-3 mb-3 align-items-center">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle"></i>
                  </div>
                  <p>2년 렌탈 이후 신규 머신으로 교체 가능</p>
                </li>
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 me-lg-auto">
              <div className="position-relative pe-12 pb-12">
                <img className="img-fluid position-relative d-block mx-auto rounded-5 shadow-lg" alt="" src="/img/bean/2.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container pt-8 pb-3">
          <div className="display-7">
            바리스타의 케어 서비스
          </div>
          <div className="row align-items-center justify-content-between my-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
            <div className="col-lg-5 me-auto order-last position-relative z-index-1">
              <h2 className="mb-4 mb-lg-5 position-relative display-5" >전문 바리스타가 찾아가는 관리 서비스입니다.</h2>
              <h6 className="mb-3 text-muted">1시간 소요</h6>
              <p className="mb-5">
                <h4 className="display-7 mb-2">
                  케어서비스 아이템
                </h4>
                {['기기 점검',
                  '레시피 점검 및 농도 점검',
                  '맛 관능 평가 진행',
                  '추출시간, 원두 담는양, 추출량 체크',
                  '살균 세척 및 기기 전체 청소'].map((item, i) => (
                    <li className="d-inline-flex me-3 mb-3 align-items-center" key={i}>
                      <div className="me-2 fs-4">
                        <i className="bx bx-check-circle text-muted opacity-75 align-middle"></i>
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
              </p>
              <p className="mb-5">
                <h4 className="display-7 mb-2">
                  비용: 회당 5만원 (vat 포함)
                </h4>
              </p>
              <p className="mb-5">
                <h4 className="display-7 mb-2">
                  월 1~2회의 케어서비스를 추천드립니다.
                </h4>
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 me-lg-auto">
              <div className="position-relative pe-12 pb-12">
                <img className="img-fluid position-relative d-block mx-auto rounded-5 shadow-lg" alt="" src="/img/bean/3.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index;