import React from "react";
import "./Logo.scss"
import logoImg from "./img/logo__logo.png";
export default class Logo extends React.Component {
    render() {
        return <div className="brand" role="banner">
            <div><img className="brand__img" src={logoImg} alt="логотип центра записи" /></div>
            <div className="brand__name"><p>Единый <br /> Центр записи</p></div>
        </div>
    }
}