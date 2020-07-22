import React from "react";
import "./Recall.scss";
import recallDoc from "./img/recall__doc.jpg";
export default class Recall extends React.Component {
    render() {
        return <section className="recall" role="banner" aria-label="баннер">
            <div className="container">
                <div className="recall__content">
                    <div className="recall__img">
                        <img src={recallDoc} alt="улыбающийся врач" role="img"
                             alt="фоновое изображение баннера" />
                    </div>
                    <div className="recall__main">
                        <p className="recall__main_text">
                            Всю необходимую информацию о том, как и в каком центре<br className="recall__main_br" />
                            сделать МРТ, КТ и рентген исследования, сравнить интересующие<br
                            className="recall__main_br" />
                            Вас клиники, цены на диагностику и порядок прохождения<br className="recall__main_br" />
                            процедур, а также записаться на исследование можно по<br className="recall__main_br" />
                            телефону <span className="recall__main_span">8 (812) 385-77-56 </span>
                        </p>
                        <form action="" className="recall__form" role="form" aria-label="форма перезвона">
                            <label htmlFor="recall__phone" className="form-title">Оставьте свой номер, а мы <br
                                className="form-title__br" />Вам
                                перезвоним<br /></label>
                            <input id="recall__phone" className="recall__input" type="tel" maxLength="13"
                                   autoComplete="none"
                                   placeholder="+380"
                                   pattern="\+380\(50|63|66|67|68|93|95|96|97|98|99)\d{7}" required />
                                <button className="recall__button" type="submit" role="button"
                                        aria-label="кнопка отправки номера телефона на перезвон">Отправить
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    }
}