import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import envelope from "./img/footer__envelope.png";
import map from "./img/footer__map.png";
import mobile from "./img/footer__mobile.png";
export default function Footer () {
    return <footer>
    <div className="container">
        <div className="footer">
            <Logo/>
            <form action="" className="form__footer">
                <label htmlFor="footer-recall" className="form__footer-title">Заказать звонок:
                    <br className="form__footer-title_br"/></label>
                <input type="tel" id="footer-recall" className="recall__input" maxLength="13" autoComplete="none"
                       placeholder="+380"
                       pattern="\+380\(50|63|66|67|68|93|95|96|97|98|99)\d{7}" required/>
                    <button type="submit" className="recall__button">Отправить</button>
            </form>
        </div>
    </div>

    <section className="footer_content_bg">
        <div className="container">
            <div className="footer_content">
                <div className="footer_content__column">
                    <ul className="footer_content__heading">Get in Touch
                        <li className="list__item">
                            <img className="list__item_mail" src={envelope} alt="значок конверта"/>
                                <div className="list__item_column">
                                    <a className="footer_content__column_link"
                                       href="mailto:free@psdfreebies.com">free@psdfreebies.com</a>
                                    <a className="footer_content__column_link"
                                       href="mailto:free@psdfreebies.com">free@psdfreebies.com</a>
                                </div>
                        </li>

                        <li className="list__item">
                            <img className="list__item_phone" src={mobile}
                                 alt="значок мобильного телефона"/>
                                <div className="list__item_column">
                                    <a className="footer_content__column_link" href="tel:+1234567890">+123 456 7890</a>
                                    <a className="footer_content__column_link" href="tel:+1234567890">+123 456 7890</a>
                                </div>

                        </li>
                        <li className="list__item">
                            <img className="list__item_map" src={map} alt="значок карты"/>
                                <div className="list__item_column">
                                    <a className="footer_content__column_link"
                                       href="https://www.google.com/maps/@48.4617838,35.0518051,20z">123, Main Road, New
                                        City,<br />My Country 123456</a>
                                </div>
                        </li>
                        <li className="list__item">
                            <div className="list__item_row">
                                <a className="list__item_social" href="#">
                                    <div className="facebook"></div>
                                </a>
                                <a className="list__item_social" href="#">
                                    <div className="google-plus"></div>
                                </a>
                                <a className="list__item_social" href="#">
                                    <div className="vk"></div>
                                </a>
                                <a className="list__item_social" href="#">
                                    <div className="youtube"></div>
                                </a>
                                <a className="list__item_social" href="#">
                                    <div className="linkedin"></div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer_content__column">
                    <ul className="footer_content__heading">Quick Links
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">About
                            us</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link"
                                                                href="#">Blog</a>
                        </li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Contact
                            us</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link"
                                                                href="#">Faq</a>
                        </li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link"
                                                                href="#">Insurance</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Contact
                            us</a></li>
                    </ul>
                </div>
                <div className="footer_content__column">
                    <ul className="footer_content__heading">Our Services
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Work
                            Injuries</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Sport
                            Injuries</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Cold
                            Laser Therapy</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Massage
                            Therapy</a></li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link"
                                                                href="#">Physiotherapy</a>
                        </li>
                        <li className="footer_content__item"><a className="arrow footer_content__column_link" href="#">Chiropratic
                            Therapy</a></li>
                    </ul>
                </div>
                <div className="footer_content__column">
                    <form action="" className="footer__form">
                        <label className="footer__form_label" htmlFor="footer__form">Enquiry Form</label>
                        <p><input className="form__input form__input_name" id="footer__form" type="text"
                                  placeholder="Name"
                                  required/></p>
                        <p><input className="form__input" type="tel" placeholder="Phone" required/></p>
                        <p><textarea className="form__input" name="comment" cols="40" rows="5" placeholder="Message"
                                     required></textarea></p>
                        <input className="footer__form_button" type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div className="footer">
        <div className="container">
            <p className="footer__copyright">Copyright © 2017.</p>
        </div>
    </div>
</footer>
}