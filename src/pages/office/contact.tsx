import "./style.css";

const index = () => {
  return (
    <div className="container my-6">
      <div className="display-7">
        우리회사 견적 알아보기
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
          <form className="position-relative">
            <div className="width-7x pt-1 bg-primary mb-5"></div>
            <form action="#" method="post" role="form" className="needs-validation mb-5 mb-lg-7" noValidate={false} />
            <div className="row">
              <div className="col-sm-6 mb-3">
                <label className="form-label" htmlFor="name">Your name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" required={true} />
              </div>
              <div className="col-sm-6 mb-3">
                <label className="form-label" htmlFor="tel">Your phone address</label>
                <input type="tel" className="form-control" name="tel" id="tel" placeholder="010-0000-0000" required={true} data-delimiter="-" data-blocks="3 4 4"/>
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" placeholder="Hi there...." required={false} style={{ "display": "block", "overflow": "hidden", overflowWrap: "break-word", resize: "none", height: "70px" }}></textarea>
              <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <div className="d-md-flex justify-content-between align-items-center">
              <p className="small mb-4 text-muted mb-md-0">We'll get back to you in 1-2 business days.</p>
              <input type="submit" name="submit" value="Submit message" id="sendBtn" className="btn btn-lg btn-primary" />
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <div>
            <h4 className="mb-0">Contact</h4>
            <div className="border-top border-2 border-secondary mb-1 mt-2"></div>
          </div>
          <h5>
            서비스 지역 - 서울, 경기
          </h5>
          <h5>
            15 인 이상의 사무실
          </h5>
          <br/>
          <h5>
            010-2956-6164,
          </h5>
          <h5>
            faaaaaaabs.com
          </h5>
        </div>
      </div>
    </div>
  )
}

export default index;