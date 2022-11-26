/* eslint-disable consistent-return */
import React, { useState } from 'react';
import chibi from '../images/chibi.png';
import '../styles/FAQ.css';

function FAQpage() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="faq">
      <div className="faq-jumbotron">
        <img className="jumbotron-image" src={chibi} alt="gambar cs" />
        <div className="jumbotron-text">
          Halo selamat datang di Tukerin!
          <br />
          Silahkan dibaca FAQ dibawah sebelum menggunakan aplikasi!
        </div>
      </div>

      <div className="accordion">
        {data.map((item, i) => (
          <div className="accordion-content">
            <div className="accordion-header" onClick={() => toggle(i)} aria-hidden="true">
              <div className="question">{item.question}</div>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'answer open' : 'answer'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'Barang apa saja yang bisa di Tukerin?',
    answer:
      'Barang dengan kondisi masih layak pakai, bukan barang rusak, dan barang milik sendiri bukan milik orang lain.',
  },
  {
    question: 'Katanya pakai sistem barter, kok ada harganya?',
    answer:
      'Harga barang digunakan untuk memberikan nilai pada suatu barang. Sehingga dalam transaksinya, jika ada barang yang dirasa tidak sesuai dengan harga barang yang ditukar, maka kedua belah pihak bisa melakukan negosiasi dengan sistem tukar tambah.',
  },
  {
    question: 'Bagaimana melakukan transaksi di Tukerin?',
    answer:
      'Cari barang yang ingin di tukar, masukkan barang yang ingin ditukar, tunggu pihak yang memiliki barang mengkonfirmasi apakah barang setuju untuk ditukar atau tidak, jika status ditolak, transaksi akan dibatalkan. jika status diterima, maka anda bisa langsung menghubungi pemilik barang melalui whatsapp dan melakukan negosiasi lebih lanjut dengan pemilik barang.',
  },
  {
    question: 'Setelah di whatsapp harus bilang apa?',
    answer:
      'Perkenalkan diri anda terlebih dahulu bahwa anda adalah orang yang ingin menukarkan barang dari aplikasi Tukerin. Lalu untuk memastikan keaslian barang, anda bisa meminta pemilik barang untuk memvideokan barangnya. Setelah itu negosiasikan nilai barang yang akan ditukar dan bagaimana transaksi barang akan dilakukan.',
  },
  {
    question: 'Setelah barang sampai, ternyata tidak sesuai dengan gambar yang diposting?',
    answer:
      'Kami tidak bertanggung jawab jika ada barang yang tidak sesuai dengan kondisi barang pada gambar. Untuk itu kami menyarankan anda ketika di whatsapp untuk memastikan kembali kondisi barang melalui video.',
  },
  {
    question: 'Bagaimana jika masih ada pertanyaan yang belum terjawab di FAQ?',
    answer:
      'Silahkan hubungi kami. Info lebih lengkap periksa halaman Tentang Kami.',
  },
];

export default FAQpage;
