import React from "react";
import "./Advantages.scss";
import car from "./img/advantages__car.png";
import emergencyHelp from "./img/advantages__emergency_help.png";
import medicalStaff from "./img/advantages__medical_staff.png";
import stethoscope from "./img/advantages__stethoscope.png";

export default class Advantages extends React.Component {
    render() {
        return <section className="advantages">
            <div className="container">
                <nav className="advantages__menu">
                    <div className="cube best_treatment">
                        <figure className="cube__circle">
                            <img src={stethoscope} alt="схематическое изображение стетоскопа" />
                        </figure>
                        <h3 className="cube__name">Best Treatment</h3>
                        <p className="cube__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>

                    <div className="cube emergency_help">
                        <figure className="cube__circle">
                            <img src={emergencyHelp}
                                 alt="схематическое изображение трубки телефона звонящей в клинику" />
                        </figure>
                        <h3 className="cube__name">Emergency Help</h3>
                        <p className="cube__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>

                    <div className="cube medical_staff">
                        <figure className="cube__circle">
                            <img src={medicalStaff}
                                 alt="схематическое изображение медицинского работника" />
                        </figure>
                        <h3 className="cube__name">Medical Staff</h3>
                        <p className="cube__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>

                    <div className="cube qualified_doctors">
                        <figure className="cube__circle">
                            <img src={car}
                                 alt="схематическое изображение машины скорой помощи" />
                        </figure>
                        <h3 className="cube__name">Qualified Doctors</h3>
                        <p className="cube__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>
                </nav>
            </div>
        </section>
        }
}