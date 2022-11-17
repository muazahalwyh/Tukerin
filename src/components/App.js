/* eslint-disable import/order */
import React, { useState, useEffect } from 'react';
import {
  Routes, Route, Link, useSearchParams,
} from 'react-router-dom';
import Popup from 'reactjs-popup';
// Components
import SearchBar from './SearchBar';
import ProfileModal from './pop-up/ProfileModal';
// Pages
import Homepage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
// eslint-disable-next-line import/no-named-as-default
import AddPage from '../pages/AddPage';
import TransactionPage from '../pages/TransactionPage';
import MyAccount from '../pages/MyAccountPage';
import BarangSayaPage from '../pages/BarangSayaPage';
// Styles
import '../styles/App.css';
import '../styles/AddPage.css';
import brandTukerin from '../images/brand-tukerin.png';
import brandTukerinFooter from '../images/tukerinn-removebg.png';
// Icons
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaCopyright } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdNotifications } from 'react-icons/md';

function App() {
  const [myProduct, setMyProduct] = useState(JSON.parse(localStorage.getItem('MY_APP_STATE')) || []);
  // const [productDijual, setProductDijual] = useState([]);
  const [productDiajukan, setProductDiajukan] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  useEffect(() => {
    localStorage.setItem('MY_APP_STATE', JSON.stringify(myProduct));
  }, [myProduct]);

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keywordSearch);
    setSearchParams({ keywordSearch });
  }

  // const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(
  //   keyword.toLocaleLowerCase(),
  // ));

  const authedUser = 'alan';
  if (authedUser === 'alan') {
    return (
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/">Tentang Kami</a></li>
              <li><a href="/">Hubungi Kami</a></li>
            </ul>
          </nav>
          <div>
            <div className="brand-container">
              <Link to="/" className="brand-logo"><img src={brandTukerin} alt="logo tukerin" /></Link>
              <h1>Tukerin</h1>
            </div>
            <SearchBar
              keyword={keyword}
            // eslint-disable-next-line react/jsx-no-bind
              keywordChange={onKeywordChangeHandler}
            />
            <div className="authentication-button">
              <li>
                <Popup trigger={<MdNotifications className="notification-icon" />} position="right center">
                  <ProfileModal />
                </Popup>
                <div className="profile-icon">
                  <Popup trigger={<CgProfile className="profile-icon__icon" />}>
                    <ProfileModal />
                  </Popup>
                  {' '}
                  <p>{authedUser}</p>
                </div>
              </li>
            </div>
          </div>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products/:id" element={<DetailPage productDiajukan={productDiajukan} setProductDiajukan={setProductDiajukan} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage myProduct={myProduct} setMyProduct={setMyProduct} />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/profile" element={<MyAccount />} />
            <Route path="/barang-saya" element={<BarangSayaPage myProduct={myProduct} setMyProduct={setMyProduct} />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-container">
            <div className="brand-footer">
              <img src={brandTukerinFooter} alt="logo tukerin" />
              <h1>Tukerin</h1>
            </div>
            <div className="usefull-links">
              <h3>Jelajahi Tukerin</h3>
              <ul className="usefull-links__list">
                <li><a href="/">Beranda</a></li>
                <li><a href="/">Tentang Kami</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className="ikuti-kami">
              <h3>Ikuti Kami</h3>
              <ul className="ikuti-kami__list">
                <li><a href="/" aria-label="facebook"><BsFacebook /></a></li>
                <li><a href="/" aria-label="instagram"><BsInstagram /></a></li>
                <li><a href="/" aria-label="twitter"><BsTwitter /></a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <FaCopyright />
            <h4>2022, C22-015</h4>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/">Tentang Kami</a></li>
            <li><a href="/">Hubungi Kami</a></li>
          </ul>
        </nav>
        <div className="header-main">
          <div className="brand-container">
            <Link to="/" className="brand-logo"><img src={brandTukerin} alt="logo tukerin" /></Link>
            <h1>Tukerin</h1>
          </div>

          <SearchBar
            keyword={keyword}
            // eslint-disable-next-line react/jsx-no-bind
            keywordChange={onKeywordChangeHandler}
          />
          <div className="authentication-button">
            <button type="button"><Link to="/login">Masuk</Link></button>
            <button type="button"><Link to="/register">Register</Link></button>
          </div>
        </div>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/barang-saya" element={<BarangSayaPage />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-container">
          <div className="brand-footer">
            <img src={brandTukerinFooter} alt="logo tukerin" />
            <h1>Tukerin</h1>
          </div>
          <div className="usefull-links">
            <h3>Jelajahi Tukerin</h3>
            <ul className="usefull-links__list">
              <li><a href="/">Beranda</a></li>
              <li><a href="/">Tentang Kami</a></li>
              <li><a href="/">FAQ</a></li>
            </ul>
          </div>
          <div className="ikuti-kami">
            <h3>Ikuti Kami</h3>
            <ul className="ikuti-kami__list">
              <li><a href="/" aria-label="facebook"><BsFacebook /></a></li>
              <li><a href="/" aria-label="instagram"><BsInstagram /></a></li>
              <li><a href="/" aria-label="twitter"><BsTwitter /></a></li>
            </ul>
            <ul>
              <li><button type="button">Facebook</button></li>
              <li><button type="button">Instagram</button></li>
              <li><button type="button">Twitter </button></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <FaCopyright />
          <h4>2022, C22-015</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
