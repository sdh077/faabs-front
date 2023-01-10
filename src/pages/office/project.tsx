import Rect from "$components/grid/rect";
import "./style.css";

const index = () => {
  const items = [
    {
      title: ['매일 마셔도 좋은', '에브리데이 커피'],
      content: '다크 초콜릿 향미와 구운 아몬드의 고소함, 은은한 산미가 고급스럽게 어우러집니다. 마신 후에도 달콤쌉싸름한 초콜릿 향이 길게 이어집니다.',
      img: '/img/projects/1.jpeg',
    },
    {
      title: ['누구나 편안하게', '즐길 수 있는 커피'],
      content: '구운 보리와 아몬드의 고소한 향이 첫 모금부터 입안에 퍼집니다. 곡물에서 느낄 수 있는 단맛을 갖고 있으면서도 산미가 거의 없어, 누구든지 편안하게 즐길 수 있습니다. 밀크 베이스 음료에서는 아몬드 밀크의 달콤함을 느낄 수 있습니다.',
      img: '/img/projects/1.jpeg',
    },
    {
      title: ['시트러스 과일의 싱그러움,', '은은한 재스민 향'],
      content: '오렌지, 자몽과 같은 싱그러운 감귤 과일의 향과 브라운 슈거를 뿌린 듯한 단맛의 조화가 인상적인 커피입니다. 깨끗한 촉감과 목 넘김 이후로 이어지는 은은한 재스민 향이 한 잔의 티처럼 느껴집니다.',
      img: '/img/projects/1.jpeg',
    },
    {
      title: ['늦은 오후에도 즐길 수 있는', '달콤한 디카페인'],
      content: '편안하게 즐길 수 있는 디카페인 커피입니다. 캐러멜의 달콤한 향과 잘 익은 감귤의 편안한 산미가 즐겁게 느껴집니다.',
      img: '/img/projects/1.jpeg',
    },
    {
      title: ['매월 바뀌는', '싱글 오리진'],
      content: '매월 수십종의 커피 중에서 선보이는 단 2-3가지의 싱글 오리진. 다양한 산지에서 온, 농장의 개성과 철학이 담긴 커피들을 선보입니다.',
      img: '/img/projects/1.jpeg',
    },
    {
      title: ['시즈널 블렌드'],
      content: '특정 시즌에만 선보이는 블렌드. 제철 재료들을 활용하여 고객과 함께 축하할만한, 시즌에 어울리는 제품들을 일시적으로 선보입니다. (예: 크리스마스 블렌드, Birthday 블렌드)',
      img: '/img/projects/1.jpeg',
    }
  ]

  return (
    <div className="mt-7">
      <div className="container position-relative mb-6">
        <div className="col-xl-9">
          <h1 className="display-4 mb-3">원두 라인업</h1>
        </div>
        <div className="row">
          {items.map((item, i) => (
            <div className="col-md-6 col-lg-4 mb-4 bootstrap grid-item" key={i}>
              <a href="#!" className="card-hover">
                <div className="overflow-hidden position-relative mb-4">
                  <img src={item.img} alt="" className="img-zoom img-fluid" />
                </div>
                <h5 className="mb-1">
                  {item.title.map((c, it) => (
                    <p key={it}>
                      {c}
                    </p>
                  ))}
                </h5>
                <span className="text-muted">
                  {item.content}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="container position-relative">
        <div className="col-xl-9">
          <h1 className="display-4 mb-3">Kinds of Coffee</h1>
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="row align-items-center justify-content-between my-8" key={i}>
            <div className="col-lg-5 me-auto order-last position-relative z-index-1">
              <h6 className="mb-3 text-muted aos-init aos-animate" data-aos="fade-up">아메리카노</h6>
              <h2 className="mb-4 mb-lg-5 position-relative display-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Americano</h2>
              <p className="mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                <li className="d-flex align-items-center mb-3">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle me-2"></i>
                  </div>
                  <span> '따뜻한 아메리카노' 버튼을 누르시면 됩니다. 기본 세팅된 진한 정도는 빈브라더스 매장 기준의 농도입니다. (TDS* 기준 1.3% 수준)</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle me-2"></i>
                  </div>
                  <span>캡슐커피 정도로 연하게 드시고 싶으신 분들은 '연한 아메리카노' 버튼을 눌러주세요.</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle me-2"></i>
                  </div>
                  <span>따로 물을 추가하지 않으셔도 됩니다.</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="me-2 fs-4">
                    <i className="bx bx-check-circle text-muted opacity-75 align-middle me-2"></i>
                  </div>
                  <span> 한번에 추출되는 양은 130g 수준입니다. 일반 카페 사이즈 음료를 즐기고 싶으신 분들은 버튼을 두 번 눌러주세요.</span>
                </li>
              </p>
              <div data-aos="fade-up" data-aos-delay="250" className="aos-init aos-animate">
                <a href="#openings" className="btn btn-lg btn-primary rounded-pill">
                  View Video
                  <i className="bx bxs-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 me-lg-auto aos-init aos-animate" data-aos="fade-down">
              <div className="position-relative pe-12 pb-12">
                <img className="img-fluid position-relative w-75 d-block mx-auto rounded-5 shadow-lg" alt="" src="/img/2.jpg" />
                <img className="img-fluid position-relative w-50 me-lg-7 d-block position-absolute end-0 bottom-0 d-block rounded-5 shadow-lg" alt="" src="/img/contact.jpeg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index;