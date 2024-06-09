import { Link } from 'react-router-dom';
import Searchbox from '../Pages/Searchbox';
import '../Navbar.css';


const links = [
  { to: '/', label: 'Categories' },
  { to: '/brand', label: 'Brands' },
  { to: '/luxe', label: 'Luxe' },
  { to: '/nykaa_fashion', label: 'Nykaa Fashion' },
  { to: '/beauty_advice', label: 'Beauty Advice' },
];

const subMenuLinks = [
  'Makeup', 'Skin', 'Hair', 'Appliances', 'Bath & Body', 'Natural', 'Mom & Baby', 'Health & Wellness', 'Men', 'Fragrance', 'Lingerie & Accessories', 'OFFERS'
];

export default function Navbar() {
  return (
    <>
      <div className="navbar-top">
        <div className="top-links">
          <Link to="/get-app">Get App</Link>
          <Link to="/store-events">Store & Events</Link>
          <Link to="/gift-card">Gift Card</Link>
          <Link to="/help">Help</Link>
          <Link to="/login"></Link>
        </div>
      </div>

      <div className="navbar">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMB_o7UcIqBlee-8hQW3-wlVyRLKL7H05kHe7w2Gwj5ZBL4MU3tNZZGFVnhVqe1HZaAA&usqp=CAU"
          alt="Nykaa Logo"
        />
        <div className="main-links">
          {links.map(link => (
            <Link to={link.to} key={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="search-signin">
          <Searchbox />
          <Link to="/login" className="signin-button">Sign In</Link>

          {/* <button className="signin-button" onClick={<LoginPage/>}>Sign in</button> */}
          <button className="cart-button">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" alt="Cart" />
          </button>
        </div>

      </div>

      <div className="submenu">

        {subMenuLinks.map((item, index) => (
          <Link to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={index}>
            {item}
          </Link>
        ))}
      </div>

    </>
  );
}
