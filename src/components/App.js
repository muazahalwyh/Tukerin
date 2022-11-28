/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/order */
import React, { useState, useEffect, useRef } from 'react';
import {
  Routes, Route, Link, useSearchParams,
} from 'react-router-dom';
import AddUser from './AddUser';
import { getUserLogged, putAccessToken } from '../utils/api-endpoint';
import Popup from 'reactjs-popup';
// Components
import SearchBar from './SearchBar';
import ProfileModal from './pop-up/ProfileModal';
// Pages
import Homepage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';
import FAQpage from '../pages/FAQpage';
// Kategori
import {
  Elektronik, FashionWanita, FashionPria, FashionAnak, MakananMinuman, Kecantikan, Hobi,
} from '../pages/categories/CategoryPage';
// eslint-disable-next-line import/no-named-as-default
import AddPage from '../pages/AddPage';
import TransactionPage from '../pages/TransactionPage';
import MyAccount from '../pages/MyAccountPage';
import BarangSayaPage from '../pages/BarangSayaPage';
import AddAkun from '../pages/AddAkun';
import ProfilNav from './ProfilNav';
import UserList from './UserList';
import EditUser from './EditUser';
// Styles
import '../styles/App.css';
import '../styles/AddPage.css';
import '../styles/NavbarResponsiv.css';
import brandTukerin from '../images/brand-tukerin.png';
import brandTukerinFooter from '../images/tukerinn-removebg.png';
import products from '../utils/data/products';
// Icons
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaCopyright } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdNotifications } from 'react-icons/md';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

function App() {
  // useref untuk drawer hamburger
  const ref = useRef();

  const [authedUser, setAuthedUser] = useState(JSON.parse(localStorage.getItem('AUTHED_USER')) || null);

  const [publishedProducts, setPublishedProducts] = useState(JSON.parse(localStorage.getItem('PUBLISHED_PRODUCTS')) || products);

  const [myProduct, setMyProduct] = useState(JSON.parse(localStorage.getItem('MY_APP_STATE')) || []);

  // eslint-disable-next-line no-unused-vars
  const [myProfil, setProfil] = useState(JSON.parse(localStorage.getItem('MY_PROFIL_STATE')) || []);

  const [productDiajukan, setProductDiajukan] = useState(JSON.parse(localStorage.getItem('PRODUCT_DIAJUKAN')) || null);

  const [productDitawar, setProductDitawar] = useState(JSON.parse(localStorage.getItem('PRODUCT_DITAWAR')) || null);

  // const untuk drawer hamburger;
  const [activeHam, setActiveHam] = useState(false);

  // showprof untuk menu profil saat responsif
  const [showProf, setShowProf] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  // fungsi untuk drawer hamburger
  const handleClose = () => {
    setActiveHam(!activeHam);
  };

  // untuk menu profil saat responsif
  const closeProf = () => {
    setShowProf(!showProf);
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data } = await getUserLogged();
  //     setAuthedUser(data.name);
  //   };
  //   getUser();
  // }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data.name);
  };

  const onLogout = () => {
    // localStorage.setItem('AUTHED_USER', null);
    setAuthedUser(null);
    putAccessToken('');
  };

  useEffect(() => {
    localStorage.setItem('AUTHED_USER', JSON.stringify(authedUser));
  }, [authedUser]);

  useEffect(() => {
    localStorage.setItem('PUBLISHED_PRODUCTS', JSON.stringify(publishedProducts));
  }, [publishedProducts]);

  useEffect(() => {
    localStorage.setItem('PRODUCT_DIAJUKAN', JSON.stringify(productDiajukan));
  }, [productDiajukan]);

  useEffect(() => {
    localStorage.setItem('PRODUCT_DITAWAR', JSON.stringify(productDitawar));
  }, [productDitawar]);

  useEffect(() => {
    localStorage.setItem('MY_APP_STATE', JSON.stringify(myProduct));
  }, [myProduct]);

  useEffect(() => {
    localStorage.setItem('MY_Profil_STATE', JSON.stringify(myProfil));
  }, [myProfil]);

  // useeffect untuk drawer hamburger
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (activeHam && ref.current && !ref.current.contains(e.target)) {
        setActiveHam(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [activeHam]);

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keywordSearch);
    setSearchParams({ keywordSearch });
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(
    keyword.toLocaleLowerCase(),
  ));

  if (authedUser === null) {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div className="app-container">
        <header>
          <nav className="menu">
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/about">Tentang Kami</a></li>
              <li><a href="/user-list">Hubungi Kami</a></li>
            </ul>
          </nav>
          <div className="header-main-login">
            <button type="submit" className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} onClick={() => handleClose(true)}>
              {activeHam ? <GrClose /> : <GoThreeBars />}
            </button>
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
          {activeHam && (
          <div className="nav-dropdown-login" ref={ref}>
            <div className="header-main-dropdown">
              <SearchBar
                keyword={keyword}
                  // eslint-disable-next-line react/jsx-no-bind
                keywordChange={onKeywordChangeHandler}
              />
            </div>
            <nav>
              <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/">Tentang Kami</a></li>
                <li><a href="/">Hubungi Kami</a></li>
              </ul>
            </nav>
            <div className="header-main-dropdown">
              <div className="authentication-button">
                <button type="button"><Link to="/login">Masuk</Link></button>
                <button type="button"><Link to="/register">Register</Link></button>
              </div>
            </div>
          </div>
          )}
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage filteredProducts={filteredProducts} />} />

            <Route path="/category/elektronik" element={<Elektronik publishedProduct={publishedProducts} />} />
            <Route path="/category/fashion-wanita" element={<FashionWanita publishedProduct={publishedProducts} />} />
            <Route path="/category/fashion-pria" element={<FashionPria publishedProduct={publishedProducts} />} />
            <Route path="/category/fashion-anak" element={<FashionAnak publishedProduct={publishedProducts} />} />
            <Route path="/category/makanan-minuman" element={<MakananMinuman publishedProduct={publishedProducts} />} />
            <Route path="/category/kecantikan" element={<Kecantikan publishedProduct={publishedProducts} />} />
            <Route path="/category/hobi" element={<Hobi publishedProduct={publishedProducts} />} />

            <Route path="/products/:id" element={<DetailPage authedUser={authedUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/addakun" element={<AddAkun />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/barang-saya" element={<BarangSayaPage />} />

            <Route path="/user-list" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/FAQ" element={<FAQpage />} />
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
                <li><a href="/about">Tentang Kami</a></li>
                <li><a href="/FAQ">FAQ</a></li>
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
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="app-container">
      <header>
        <nav className="menu">
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/about">Tentang Kami</a></li>
            <li><a href="/user-list">Hubungi Kami</a></li>
          </ul>
        </nav>
        <div className="header-main">
          <div className="icon-toggle">
            <button type="submit" className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} onClick={() => handleClose(true)}>
              {activeHam ? <GrClose /> : <GoThreeBars />}
            </button>
          </div>
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
                {/* <ProfileModal onLogout={onLogout} /> */}
              </Popup>
            </li>
            <div className="profile-icon">
              <li>
                <Popup trigger={<CgProfile className="profile-icon__icon" />}>
                  <ProfileModal onLogout={onLogout} />
                </Popup>
                {' '}
                <p>{authedUser}</p>
              </li>
            </div>

          </div>
        </div>
        {activeHam && (
          <div className="nav-dropdown" ref={ref}>
            <div className="header-main-dropdown">
              <SearchBar
                keyword={keyword}
                  // eslint-disable-next-line react/jsx-no-bind
                keywordChange={onKeywordChangeHandler}
              />
            </div>
            <nav>
              <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/">Tentang Kami</a></li>
                <li><a href="/">Hubungi Kami</a></li>
              </ul>
            </nav>
            <div className="header-main-dropdown">
              <div className="authentication-button">
                <div className="profile-icon">
                  <div className={showProf ? 'prof active-prof' : 'prof'} onClick={closeProf}>
                    {showProf ? (
                      <>
                        <CgProfile className="profile-icon__icon" />
                        {' '}
                        <p>{authedUser}</p>
                      </>
                    ) : (
                      <>
                        <CgProfile className="profile-icon__icon" />
                        {' '}
                        <p>{authedUser}</p>
                      </>
                    )}
                  </div>
                  {showProf && (
                    <ProfilNav onLogout={onLogout} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage filteredProducts={filteredProducts} />} />

          <Route path="/category/elektronik" element={<Elektronik publishedProduct={publishedProducts} />} />
          <Route path="/category/fashion-wanita" element={<FashionWanita publishedProduct={publishedProducts} />} />
          <Route path="/category/fashion-pria" element={<FashionPria publishedProduct={publishedProducts} />} />
          <Route path="/category/fashion-anak" element={<FashionAnak publishedProduct={publishedProducts} />} />
          <Route path="/category/makanan-minuman" element={<MakananMinuman publishedProduct={publishedProducts} />} />
          <Route path="/category/kecantikan" element={<Kecantikan publishedProduct={publishedProducts} />} />
          <Route path="/category/hobi" element={<Hobi publishedProduct={publishedProducts} />} />

          <Route path="/products/:id" element={<DetailPage filteredProducts={filteredProducts} productDiajukan={productDiajukan} setProductDiajukan={setProductDiajukan} productDitawar={productDitawar} setProductDitawar={setProductDitawar} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage publishedProducts={publishedProducts} setPublishedProducts={setPublishedProducts} myProduct={myProduct} setMyProduct={setMyProduct} />} />
          <Route path="/transaction" element={<TransactionPage productDiajukan={productDiajukan} setProductDiajukan={setProductDiajukan} productDitawar={productDitawar} />} />
          <Route path="/profile" element={<MyAccount />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/barang-saya" element={<BarangSayaPage myProduct={myProduct} setMyProduct={setMyProduct} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQpage />} />
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
              <li><a href="/about">Tentang Kami</a></li>
              <li><a href="/FAQ">FAQ</a></li>
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

export default App;
