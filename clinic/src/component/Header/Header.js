import React from "react";
import './Header.scss';
import arrow from "./img/header__arrow.png";
import Logo from "../Logo/Logo";
export default class Header extends React.Component {
    render() {
      return  <header className="header" aria-label="шапка сайта">
            <div className="container">
                <div className="header__brand" aria-label="логотип сайта">
                <Logo />
                    <a href="tel:803005000" className="header__brand_phone" aria-label="номер телефона горячей линии">
                        <i className="fas fa-phone-square-alt"></i> 80300 5000</a>
                </div>
                <nav className="header__menu" role="navigation" aria-label="меню навигации">
                    <ul className="menu" role="list" aria-label="виды услуг">
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">Главная</a></li>
                        <li role="listitem" className="menu__item services"><a className="menu__item_link" href="#">Услуги
                            <img src={arrow} alt="Стелка вниз" /></a>
                            <div className="services__menu">
                                <a className="menu__item_link" href="#">МРТ</a>
                                <a className="menu__item_link" href="#">КТ</a>
                                <a className="menu__item_link" href="#">Рентген</a>
                            </div>
                        </li>
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">Клиники и
                            кабинеты</a></li>
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">О нас</a></li>
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">Статьи</a></li>
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">FAQ</a></li>
                        <li role="listitem" className="menu__item"><a className="menu__item_link" href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    }
}