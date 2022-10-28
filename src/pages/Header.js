import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
const Header = () => {

    const [TG, setTG] = useState([false, false]);
    const HL = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HL.current.classList.add('on')
                : HL.current.classList.remove('on')
        })
    }, []);

    return (
        <header className='Header'>
            <div className="top__bar">
                <ul className="inner">
                    <li><a href="#!">로그인</a></li>
                    <li><a href="#!">회원가입</a></li>
                    <li><a href="#!">고객문의</a></li>
                    <li className={'lang ' + (TG[0] ? 'on' : '')}>
                        <strong onClick={() => setTG([!TG[0], false])}><i className="xi-globus"></i> KOR <i className="xi-angle-down arrow"></i></strong>
                        <ul className="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                            <li><a href="#!">CHN</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="gnb">
                <div className="inner">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
                        </Link>
                    </h1>
                    <nav>
                        <NavMenu />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header