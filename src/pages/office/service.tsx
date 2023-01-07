import Hover from "$components/motion/hover";
import "./style.css";

const index = () => {
  const items = [
    {
      title: '농도가 잘 구현되는 커피 머신',
      subTitle: '그라인더가 다릅니다.',
      content: 'BB의 커피머신은 세계적인 커피 머신 브레빌(Breville)의 그라인더 제조사에서 그라인더를 생산하고 있습니다. 기존 오피스용 전자동 머신 그라인더들은 주물 방식으로 제조되어 제품별 편차가 큰 편인데요. 커피 팩토리의 그라인더는 CNC(Computer Numerical Control)로 커팅되어 정밀도가 더욱 높습니다.',
      img: '/img/1.jpg'
    },
    {
      title: '바리스타가 세팅해주는 레시피',
      subTitle: '카페 레시피와 동일하게 레시피를 세팅합니다.',
      content: '신선한 원두로 진한 에스프레소를 내리고, 그 에스프레소량에 맞춰 물량을 세팅하여 아메리카노의 향과 맛, 진하기를 조절합니다. 카페에서 즐기는 진하고 신선한 커피 풍미 그대로, 오피스에서도 세팅해드려요.',
      img: '/img/1.jpg'
    },
    {
      title: '정기 케어 서비스',
      subTitle: '',
      content: '전문 바리스타가 찾아가 커피의 농도를 체크하고, 다시 레시피를 조정해줍니다. 월 1~2회의 정기 케어서비스로 계속해서 맛있는 커피를 즐길 수 있어요.',
      img: '/img/1.jpg'
    },
    {
      title: '고온 스팀 살균 세척',
      subTitle: '',
      content: '추출기 내부까지, 고온 스팀 살균 세척으로 확실하게 위생을 관리해주세요.',
      img: '/img/1.jpg'
    }
  ]
  return (
    <div className="container">
      <section className="position-relative">
        <div className="container position-relative py-4 py-lg-7">
          <div className="row pt-9 pt-lg-5">
            <div className="col-xl-9">
              <h1 className="display-4 mb-3">바리스타가 관리해주는</h1>
              <h1 className="display-4 mb-3">사무실 커피</h1>
              <div>
                <p className="mb-1">
                  사무실에서 마시는 커피는 카페에서 마시는 커피보다 왜 맛이 없을까요?
                </p>
                <br />
                <p className="mb-1">
                  농도가 카페에서 마시는 정도로 구현되지 않기 때문입니다.
                </p>
                <p className="mb-1">
                  농도가 낮은 커피는 맛도 연하고, 향도 연해서 음료 만족도가 낮아요.
                </p>
                <br />
                <p className="mb-1">
                  빈브라더스가 선정한 커피 머신, 레시피 세팅 그리고 신선한 원두로 여러분의 사무실에서도 빈브라더스의 매장 커피 맛 그대로 즐기실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="col-xl-12 row">
              {items.map((item, i) => (
                <div className="col-6 p-2 mb-5" key={i}>
                  <Hover>
                    <img src={item.img} />
                  </Hover>
                  <h3 className="display-7 mb-1">{item.title}</h3>
                  <h6 className="display-8 mb-3">{item.subTitle}</h6>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
            <div data-aos="fade-up" className="row mb-5 aos-init aos-animate">
              <div className="col-lg-12">
                <div className="card flex-md-row flex-column overflow-hidden rounded-4 shadow-sm hover-shadow hover-lift bg-white">
                  <div className="col-md-4">
                    <div className="d-flex flex-column border-end-md align-items-md-center justify-content-center h-100 bg-white border-light">
                      <img src="/img/projects/1.jpeg" alt="" className="h-auto" />
                    </div>
                  </div>
                  <div className="card-body h-100 p-4 py-5 py-md-7 px-md-5 flex-grow-1">
                    <div className="d-md-flex align-items-md-center">
                      <div className="ps-md-9 pe-md-5">
                        <h1 className="display-6 mb-3">방문 리포트</h1>
                        <p className="fs-6 mb-4">
                          매번 기록한 리포트를 보내드립니다.
                          매 방문마다 농도를 측정하고, 레시피를 다시 세팅하고, 머신의 현재 상태를 점검합니다. 빈브라더스의 전문 바리스타가 매회 진행하는 케어 서비스, 그 자리에서 옆에서 보지 않더라도 어떻게 진행되는지 편하게 문자로 받아보세요.
                        </p>
                        <div className="mb-5">
                          <small className="d-block lh-1 text-muted"> at FAABS</small>
                        </div>
                        <a href="#" className="btn btn-outline-secondary rounded-pill btn-hover-arrow">
                          <span>리포트 예시보기</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index;