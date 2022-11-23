// import React, { useState } from 'react';
// import { GoThreeBars } from 'react-icons/go';
// import { GrClose } from 'react-icons/gr';
// import SearchBar from './SearchBar';

// function Header() {
//   const [activeHam, setActiveHam] = useState(false);
//   const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

//   const onClick = () => {
//     setActiveHam(!activeHam);
//   };

//   return (
//     <header>
//       <nav className="menu">
//         <ul>
//           <li><a href="/">Beranda</a></li>
//           <li><a href="/">Tentang Kami</a></li>
//           <li><a href="/">Hubungi Kami</a></li>
//         </ul>
//       </nav>
//       <div className="header-main">
// eslint-disable-next-line max-len
//      <button type="submit" className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} onClick={onClick}>
//           {activeHam ? <GrClose /> : <GoThreeBars />}
//         </button>
//         <div className="brand-container">
// eslint-disable-next-line max-len
//           <Link to="/" className="brand-logo"><img src={brandTukerin} alt="logo tukerin" /></Link>
//           <h1>Tukerin</h1>
//         </div>

//         <SearchBar
//           keyword={keyword}
//             // eslint-disable-next-line react/jsx-no-bind
//           keywordChange={onKeywordChangeHandler}
//         />
//         <div className="authentication-button">
//           <li>
// eslint-disable-next-line max-len
//             <Popup trigger={<MdNotifications className="notification-icon" />} position="right center">
//               {/* <ProfileModal onLogout={onLogout} /> */}
//             </Popup>
//             <div className="profile-icon">
//             <Popup trigger={<CgProfile className="profile-icon__icon" />}>
//                 <ProfileModal onLogout={onLogout} />
//             </Popup>
//             {' '}
//             <p>{authedUser}</p>
//             </div>
//           </li>
//         </div>
//         </div>
//         {activeHam && (
//           <div className="nav-dropdown">
//             <nav>
//               <ul>
//                 <li><a href="/">Beranda</a></li>
//                 <li><a href="/">Tentang Kami</a></li>
//                 <li><a href="/">Hubungi Kami</a></li>
//               </ul>
//             </nav>
//             <div className="header-main-dropdown">
//               <SearchBar
//                 keyword={keyword}
//                 // eslint-disable-next-line react/jsx-no-bind
//                 keywordChange={onKeywordChangeHandler}
//               />
//               <div className="authentication-button">
//                 <li>
//                   <div className="profile-icon">
//                     <Popup trigger={<CgProfile className="profile-icon__icon" />}>
//                       <ProfileModal onLogout={onLogout} />
//                     </Popup>
//                     {' '}
//                     <p>{authedUser}</p>
//                   </div>
//                 </li>
//               </div>
//             </div>
//           </div>
//         )}
//     </header>
//   );
// }

// export default Header;
