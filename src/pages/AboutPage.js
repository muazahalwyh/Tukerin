/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import brandTukerin from '../images/brand-tukerin.png';
import kazuha from '../images/kazuha.jpeg';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <div className="about-tukerin">
        <h1>TENTANG TUKERIN</h1>
        <div className="logo-tukerin"><img src={brandTukerin} alt="logo tukerin" /></div>
        <p>
          Tukerin adalah sebuah website yang dibangun sebagai wadah
          dalam melakukan pertukaran barang menggunakan metode barter
          maupun tukar tambah berbasis website.
        </p>
      </div>
      <div className="about-team">
        <h1>TENTANG KAMI</h1>
        <div className="card-container">
          <div className="card-item">
            <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
            <div className="card-info">
              <p className="card-info__name">Muhammad Iqbaal Hibatullah</p> <br />
              <p className="card-info__id">R012X0099</p> <br />
              <p className="card-info__city">Bandung</p> <br />
            </div>
            <div className="card-action">
              <a href="/"><FaLinkedin size={40} /></a>
              <a href="/"><FaGithubSquare size={40} /></a>
            </div>
          </div>
          <div className="card-item">
            <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
            <div className="card-info">
              <p className="card-info__name">Maulana Dimyati</p> <br />
              <p className="card-info__id">R120X0181</p> <br />
              <p className="card-info__city">Tegal</p> <br />
            </div>
            <div className="card-action">
              <a href="/"><FaLinkedin size={40} /></a>
              <a href="/"><FaGithubSquare size={40} /></a>
            </div>
          </div>
          <div className="card-item">
            <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
            <div className="card-info">
              <p className="card-info__name">Aliffiah Siti Ratuajeng</p> <br />
              <p className="card-info__id">R299Y0764</p> <br />
              <p className="card-info__city">Bandung</p> <br />
            </div>
            <div className="card-action">
              <a href="/"><FaLinkedin size={40} /></a>
              <a href="/"><FaGithubSquare size={40} /></a>
            </div>
          </div>
          <div className="card-item">
            <div className="card-avatar"><img src={kazuha} alt="foto profil" /></div>
            <div className="card-info">
              <p className="card-info__name">Mu’azah Al’Adawiyah</p> <br />
              <p className="card-info__id">R429Y0975</p> <br />
              <p className="card-info__city">Jambi</p> <br />
            </div>
            <div className="card-action">
              <a href="/"><FaLinkedin size={40} /></a>
              <a href="/"><FaGithubSquare size={40} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
