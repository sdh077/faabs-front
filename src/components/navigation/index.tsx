import { RootState } from '$store/index';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../dropdown';
import NavLink from './navLink';
import './style.css'
const Navigation = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const nav2 = ['/carousel', '/','/people']
  const navItems = [
    {
      title: 'archive',
      link: 'archive',
    },
    {
      title: '원두',
      link: 'bean'
    },
    {
      title: '도매',
      link: 'whool-sale'
    },
    {
      title: 'contact',
      link: null,
      items: [
        {
          title: 'contact',
          link: 'contact',

        },
        {
          title: 'people',
          link: 'people',
        }
      ]
    },
  ]
  const NavIn = () =>
    <Nav variant="pills" activeKey="1" bsPrefix='flex'>
      {navItems.map((item, i) => (
        <div key={i}>
          {item.items ?
            <Dropdown title={item.title} items={item.items} /> :
            <NavLink title={item.title} link={item.link} />}
        </div>
      ))}
    </Nav>
  const navType = ['header-fixed-top','header-absolute-top']
  const jsx = nav2.includes(location.pathname.toLocaleLowerCase()) ?
    <header className='z-index-fixed header-transparent header-absolute-top pt-lg-3'>
      <div className='container zindex-sticky'>
        <nav className='navbar text-white'>
          <Link to="/">Home</Link>
          <NavIn />
        </nav>
      </div>
      <div className="margin" />
    </header >
    :
    <div className="margin">
      <header className={navType[1]+' z-index-fixed header-transparent pt-lg-3 design-theme'}>
        <div className='container zindex-sticky'>
          <nav className='navbar'>
            <Link className='' to="/">Home</Link>
            <NavIn />
          </nav>
        </div>
      </header>
    </div>
  return jsx
};

export default Navigation;
