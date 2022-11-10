import React, { useState } from 'react';
import {
  Routes, Route, Link, useSearchParams,
} from 'react-router-dom';
// Components
import SearchBar from './SearchBar';
// Pages
import Homepage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AddPage from '../pages/AddPage';
// Styles
import '../styles/App.css';
import '../styles/AddPage.css';
import brandLogo from '../images/logo192.png';
import brandTukerin from '../images/brand-tukerin.png';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [products, setProduct] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keyword);
    setSearchParams({ keywordSearch });
  }

  // const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(
  //   keyword.toLocaleLowerCase(),
  // ));

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
          <Link to="/" className="brand-logo"><img src={brandTukerin} alt="logo tukerin" /></Link>
          <h1>Tukerin</h1>
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
      <footer>
        <div>
          <img src={brandLogo} alt="logo tukerin" />
          <div className="usefull-links">
            <h3>Jelajahi Tukerin</h3>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/">Tentang Kami</a></li>
              <li><a href="/">Hubungi Kami</a></li>
            </ul>
          </div>
          <div className="ikuti-kami">
            <h3>Ikuti Kami</h3>
            <ul>
              <li><button type="button">Facebook</button></li>
              <li><button type="button">Instagram</button></li>
              <li><button type="button">Twitter </button></li>
            </ul>
          </div>
        </div>
        <h4>2022, C22-015</h4>
      </footer>
    </div>
  );
}

export default App;
