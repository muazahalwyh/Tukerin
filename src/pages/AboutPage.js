/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import logo from '../images/brand-tukerin.png';
import kelebihanTukerin from '../images/homepage.png';
import '../styles/AboutPage.css';
import Loading from '../components/Loading';

import alan from '../images/team/alan.png';
import iqbal from '../images/team/iqbal.png';
import muazah from '../images/team/muazah.png';
import ajeng from '../images/team/ajeng.png';

function AboutPage() {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      { IsLoading ? (
        <Loading />
      ) : (
        <div className="about">
          <h1>TENTANG TUKERIN</h1>
          <div className="about-tukerin">
            <div className="logo-about"><img src={logo} alt="logo tukerin" /></div>
            <div className="pengertian">
              <h2>Apa itu Tukerin ?</h2>
              <p>
                Tukerin adalah sebuah website yang dibangun sebagai wadah
                dalam melakukan pertukaran barang menggunakan metode barter
                maupun tukar tambah berbasis website.
              </p>
            </div>
          </div>
          <div className="about-tukerin">
            <div className="pengertian">
              <h2>Kenapa Tukerin ?</h2>
              <p>
                Berbelanja online sekarang banyak dilakukan karena memiliki banyak kelebihan.
                Dengan segala kemudahan yang ditawarkan tersebut membuat orang cenderung semakin
                konsumtif. Bartering atau barter merupakan tukar menukar barang tanpa membeli
                barang yang baru sehingga dapat mengurangi pengeluaran yang seharusnya tidak
                diperlukan.
              </p>
            </div>
            <div className="whyTukerin"><img src="https://inspora.com/images/inspora_hero.svg" alt="logo tukerin" /></div>
          </div>
          <div className="about-tukerin">
            <div className="kelebihanTukerin"><img src={kelebihanTukerin} alt="logo tukerin" /></div>
            <div className="pengertian">
              <h2>Fitur & Kelebihan Tukerin</h2>
              <ul>
                <li><p>Pencarian barang yang mudah berdasarkan nama maupun kategori.</p></li>
                <li>
                  <p>Tampilan yang simple membuat pengguna baru
                    mudah untuk mulai menggunakan aplikasi ini.
                  </p>
                </li>
                <li>
                  <p>Fitur chat ke Whatsapp memungkinkan pengguna untuk menghubungi pengguna lain
                    dalam bertransaksi.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <h2 style={{ textAlign: 'center' }}>Meet the team</h2>
          <div className="container-team">
            <div className="member">
              <div className="profile-picture1"><img src={iqbal} alt="profile img" /></div>
              <div className="member-info">
                <h3>Muhammad Iqbaal Hibatullah</h3>
                <p>R012X0099</p>
                <p>Bandung</p>
              </div>
              <div className="social-media">
                <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/muhammad-iqbaal-hibatullah-a31324214/"><FaLinkedinIn /></a>
                <a href="https://github.com/EvoVincere"><FaGithub /></a>
              </div>
            </div>
            <div className="member">
              <div className="profile-picture1"><img src={alan} alt="profile img" /></div>
              <div className="member-info">
                <h3>Maulana Dimyati</h3>
                <p>R120X0181</p>
                <p>Tegal</p>
              </div>
              <div className="social-media">
                <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/maulanadimyati/"><FaLinkedinIn /></a>
                <a href="https://github.com/dimyatimaulana"><FaGithub /></a>
              </div>
            </div>
            <div className="member">
              <div className="profile-picture1"><img src={ajeng} alt="profile img" /></div>
              <div className="member-info">
                <h3>Aliffiah Siti Ratuajeng</h3>
                <p>R299Y0764</p>
                <p>Bandung</p>
              </div>
              <div className="social-media">
                <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/aliffiah-siti-ratuajeng-a55056256/"><FaLinkedinIn /></a>
                <a href="https://github.com/Alifiasraa"><FaGithub /></a>
              </div>
            </div>
            <div className="member">
              <div className="profile-picture1"><img src={muazah} alt="profile img" /></div>
              <div className="member-info">
                <h3>Mu’azah Al’Adawiyah</h3>
                <p>R429Y0975</p>
                <p>Jambi</p>
              </div>
              <div className="social-media">
                <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/muazah-aladawiyah-4194741b9/"><FaLinkedinIn /></a>
                <a href="https://github.com/muazahalwyh"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;

// <div className="about-team">
//   <h1>TENTANG KAMI</h1>
//   <div className="card-container">
//     <div className="card-item">
//       <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
//       <div className="card-info">
//         <p className="card-info__name">Muhammad Iqbaal Hibatullah</p> <br />
//         <p className="card-info__id">R012X0099</p> <br />
//         <p className="card-info__city">Bandung</p> <br />
//       </div>
//       <div className="card-action">
//         <a href="/"><FaLinkedin size={40} /></a>
//         <a href="/"><FaGithubSquare size={40} /></a>
//       </div>
//     </div>
//     <div className="card-item">
//       <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
//       <div className="card-info">
//         <p className="card-info__name">Maulana Dimyati</p> <br />
//         <p className="card-info__id">R120X0181</p> <br />
//         <p className="card-info__city">Tegal</p> <br />
//       </div>
//       <div className="card-action">
//         <a href="/"><FaLinkedin size={40} /></a>
//         <a href="/"><FaGithubSquare size={40} /></a>
//       </div>
//     </div>
//     <div className="card-item">
//       <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
//       <div className="card-info">
//         <p className="card-info__name">Aliffiah Siti Ratuajeng</p> <br />
//         <p className="card-info__id">R299Y0764</p> <br />
//         <p className="card-info__city">Bandung</p> <br />
//       </div>
//       <div className="card-action">
//         <a href="/"><FaLinkedin size={40} /></a>
//         <a href="/"><FaGithubSquare size={40} /></a>
//       </div>
//     </div>
//     <div className="card-item">
//       <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
//       <div className="card-info">
//         <p className="card-info__name">Mu’azah Al’Adawiyah</p> <br />
//         <p className="card-info__id">R429Y0975</p> <br />
//         <p className="card-info__city">Jambi</p> <br />
//       </div>
//       <div className="card-action">
//         <a href="/"><FaLinkedin size={40} /></a>
//         <a href="/"><FaGithubSquare size={40} /></a>
//       </div>
//     </div>
//   </div>
// </div>;
