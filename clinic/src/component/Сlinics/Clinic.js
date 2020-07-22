import React from "react";
import "./Clinic.scss";
import photoClinic from "./img/clinics__photo_clinic.png";
export default function Clinic () {
        return <div id="tabs" className="main container">
            <nav>
                <ul className="main__nav">
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-1" id="link-target">МРТ</a>
                    </li>
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-2">КТ</a></li>
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-3">РЕНТГЕН
                        <span className="rentgen-full">ИССЛЕДОВАНИЯ</span></a></li>
                </ul>
            </nav>
            <div className="tabs">
                <div id="tabs-1">
                    <section className="clinic" id="item-1">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-2">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-3">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-4">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-5">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-6">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>
                    <button className="all_clinic">Все кабинеты</button>
                </div>

                <div id="tabs-2">
                    <section className="clinic " id="item-7">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-8">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-9">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-10">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-11">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-12">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>
                    <button className="all_clinic">Все кабинеты</button>
                </div>

                <div id="tabs-3">
                    <section className="clinic " id="item-13">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-14">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-15">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-16">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-17">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>

                    <section className="clinic " id="item-18">
                        <div itemScope itemType="http://schema.org/MedicalOrganization">
                            <div className="clinic__card">
                                <img className="clinic__img" src={photoClinic} alt="фото клиники"
                                     itemProp="image" />
                                    <div className="clinic__info">
                                        <h5 className="clinic__info_name" itemProp="legalName">Название клиники</h5>
                                        <div className="clinic__info_address" itemProp="address" itemScope
                                             itemType="http://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Ленинский проспект, д. 160,</span>
                                            <span itemProp="addressLocality">Cанкт-Петербург</span>
                                        </div>
                                    </div>
                            </div>
                            <p className="clinic__text" itemProp="description">Что такое текст «рыба» знают все, кто
                                работает с
                                версткой журналов, <br className="clinic__text_br"/>
                                    дизайном и разработкой сайтов. Этот текст служит для демонстрации того,<br
                                    className="clinic__text_br"/>
                                    как контент впоследствии будет выглядеть на готовой странице, чтобы<br
                                    className="clinic__text_br"/>
                                    увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                            <div className="clinic__bottom">
                                <p className="clinic__bottom_phone_number">Наш номер: <a className="clinic__bottom_link"
                                                                                         itemProp="telephone"
                                                                                         href="tel:+38560996665">+3856 0
                                    99 66
                                    65</a></p>
                                <button className="clinic__bottom_button">Заказать звонок</button>
                            </div>
                        </div>
                    </section>
                    <button className="all_clinic">Все кабинеты</button>
                </div>
            </div>
        </div>
}