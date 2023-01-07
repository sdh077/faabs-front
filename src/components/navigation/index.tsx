import { RootState } from '$store/index';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../dropdown';
import NavLink from './navLink';
import './style.css'
import navItems from './navItems.json'

const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const nav2 = ['/carousel', '/', '/people']
  interface navItem {
    title: string,
    link: string | null,
    items: any
  }
  
  const NavIn = () =>
    <nav className='flex'>
      {/* {navItems.map((item, i) => (
        <div key={i}>
          {item.items ?
            <Dropdown title={item.title} items={item.items} /> :
            <NavLink title={item.title} link={item.link} />
            }
        </div>
      ))} */}
    </nav>
  const Login = () =>
    <div className="d-flex align-items-center navbar-no-collapse-items order-last overflow-hidden">
      <div className="nav-item me-3 me-lg-0 ms-lg-4 ms-xl-5 dropdown">
        <a href="#" className="btn btn-outline-primary text-light btm-sm rounded-pill py-1"
          data-bs-auto-close="outside" data-bs-toggle="dropdown">
          Login
        </a>

        <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs p-4">
          <form className="needs-validation" noValidate>
            <div>
              <h3 className="mb-1"> Welcome back! </h3>
              <p className="mb-4 text-gray-400">
                Please Sign In with details...
              </p>
            </div>
            <div className="input-icon-group mb-3">
              <span className="input-icon">
                <i className="bx bx-envelope"></i>
              </span>
              <input type="email" required className="form-control" autoFocus={true} placeholder="Username" />
            </div>
            <div className="input-icon-group mb-3">
              <span className="input-icon">
                <i className="bx bx-key"></i>
              </span>
              <input type="password" required className="form-control" placeholder="Password" />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <div>
                <label className="text-end d-block small mb-0">
                  <a href="page-account-forget-password.html"
                    className="text-muted link-decoration">Forget Password?
                  </a>
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-hover-arrow" type="submit">
                <span>Sign in</span>
              </button>
            </div>
            <p className="pt-4 mb-0 text-muted">
              Don’t have an account yet? <a href="page-account-signup.html"
                className="ms-2 pb-0 text-dark fw-semibold link-underline">Sign Up</a>
            </p>
          </form>

        </div>
      </div>
    </div>
  const navType = ['header-fixed-top', '']
  const jsx = nav2.includes(location.pathname.toLocaleLowerCase()) ?
    <header className='z-index-fixed navbar-expand-lg header-transparent header-absolute-top pt-lg-3'>
      <nav className='navbar navbar-expand-lg text-white navbar-link-white'>
        <div className='container zindex-sticky position-relative'>
          <Link to="/" className='navbar-brand'><img src="/img/logo/1.png" width={"100px"} /></Link>
          <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <i></i>
            </span>
          </button>
          <div className='d-flex align-items-center navbar-no-collapse-items '>
            <div className='navbar-collapse collapse show reverse-list' id="mainNavbarTheme">
              <NavIn />
            </div>
          </div>
        </div>
      </nav>
      <div className="margin" />
    </header >
    :
    <div className="mb-2">
      <header className={navType[1] + ' z-index-fixed navbar-expand-lg header-transparent pt-lg-3 design-theme mb-1'}>
        <nav className='navbar navbar-expand-lg'>
          <div className='container zindex-sticky position-relative'>
            <Link className='navbar-brand' to="/"><img src="/img/logo/1.png" width={"100px"} /></Link>
            <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i></i>
              </span>
            </button>
            <div className='d-flex align-items-center navbar-no-collapse-items '>
              <div className='navbar-collapse collapse show reverse-list' id="mainNavbarTheme">
                <NavIn />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  return jsx
};

export default Navigation;
