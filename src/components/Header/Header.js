import { isTemplateElement } from '@babel/types'
import React, { useState, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import Logo from "assets/images/Logo.png"

import "./Header.css"

const Header = () => {

    const [Clicked, setClicked] = useState(false);
    const [FixedHeader, setFixedHeader] = useState(false);

    const controlHeader = () => {
        if (window.scrollY < 500) {
            setFixedHeader(false);
        }
        else {
            setFixedHeader(true);
        }
    }


    const handleClick = () => {
        setClicked(!Clicked);
    }


    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => {
            window.removeEventListener('scroll', controlHeader);
        }
    }, [])


    return (
        <nav className={`${FixedHeader ? "NavbarItems-fixed" : "NavbarItems"}`}  >
            <div className="navbar-logo">
                <a href="/">
                    <img src={Logo} alt="logo" style={{ width: "200px", }} />
                </a>
            </div>
            <ul className={Clicked ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => (

                        <li key={index}>
                            <a className="menuItems" className={`${FixedHeader ? "nav-links-fixed" : item.cName}`} href={item.url}>
                                {item.title}
                            </a>
                            {
                                index == 3 ? "" : <span style={FixedHeader ? { color: "black", marginRight: "0.5rem", marginLeft: "0.5rem" } : { color: "white", marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>
                            }
                        </li>
                    ))
                }
            </ul>

            {/* RIGHT ICONS - HEART - SEARCH - BUY */}
            <div>
                {/* Heart Icon */}
                <a href="/wishlist" className={`${FixedHeader ? "heartClass-fixed" : "heartClass"}`} >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19.859px" height="16.125px" viewBox="0 0 19.859 16.125" enableBackground="new 0 0 19.859 16.125" xmlSpace="preserve">
                        <path fill="none" stroke="#FFFFFF" strokeMiterlimit={10} d="M9.905,15.542c0,0-4.889-2.521-7.834-6.5
                c-2.313-3.125-1.776-6.16,0.308-7.66c3.553-2.559,7.526,1.535,7.526,1.535s3.985-4.386,7.933-1.208
                c2.066,1.663,1.936,4.725-0.219,7.502C14.744,12.917,9.905,15.542,9.905,15.542z" />
                    </svg>
                </a>

                <span style={FixedHeader ? { color: "black", marginRight: "0.5rem", marginLeft: "0.5rem" } : { color: "white", marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>

                {/* Search Icon */}
                <span className={`${FixedHeader ? "searchClass-fixed" : "searchClass"}`}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.833px" height="15.958px" viewBox="0 0 15.833 15.958" enableBackground="new 0 0 15.833 15.958" xmlSpace="preserve">
                        <circle fill="none" stroke="#FFFFFF" strokeMiterlimit={10} cx="6.555" cy="6.579" r={6} />
                        <line fill="none" stroke="#FFFFFF" strokeMiterlimit={10} x1="10.735" y1="10.884" x2="15.438" y2="15.587" />
                    </svg>
                </span>

                <span style={FixedHeader ? { color: "black", marginRight: "0.5rem", marginLeft: "0.5rem" } : { color: "white", marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>

                {/* Cart Icon*/}
                <span className={`${FixedHeader ? "cartClass-fixed" : "cartClass"}`}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="18px" viewBox="0 0 21.346 18.141" enableBackground="new 0 0 21.346 18.141" xmlSpace="preserve">
                        <polygon stroke="#fff" fill="none" strokeMiterlimit={10} points="17.673,17.641 3.673,17.641 0.673,7.683 20.673,7.683 " />
                        <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="10.673" y1="7.683" x2="10.673" y2="17.641" />
                        <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="5.673" y1="7.683" x2="7.673" y2="17.641" />
                        <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="15.673" y1="7.683" x2="13.673" y2="17.641" />
                        <polyline stroke="#fff" fill="none" strokeMiterlimit={10} points="6.665,7.683 10.673,0.975 14.681,7.683 " />
                        <line stroke="#fff" fill="none" strokeMiterlimit={10} x1="2.173" y1="12.662" x2="19.173" y2="12.662" />
                    </svg>
                    <span className="cartCounter">0</span>
                </span>

                <span style={FixedHeader ? { color: "black", marginRight: "0.5rem", marginLeft: "0.5rem" } : { color: "white", marginRight: "0.5rem", marginLeft: "0.5rem" }}>|</span>

                {/* Menu-Sidebar Icon*/}
                <span className={`${FixedHeader ? "menuClass-fixed" : "menuClass"}`}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="27px" height="17px" viewBox="0 0 27 17" enableBackground="new 0 0 27 17" xmlSpace="preserve">
                        <line fill="none" stroke="#FFFFFF" strokeMiterlimit={10} x1={0} y1="8.5" x2={27} y2="8.5" />
                        <line fill="none" stroke="#FFFFFF" strokeMiterlimit={10} x1={5} y1="16.5" x2={22} y2="16.5" />
                        <line fill="none" stroke="#FFFFFF" strokeMiterlimit={10} x1={5} y1="0.5" x2={22} y2="0.5" />
                    </svg>
                </span>
            </div>

            <div className="menu-icon" onClick={() => handleClick()}>
                <i className={Clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    )
}

export default Header