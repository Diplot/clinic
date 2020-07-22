import React from "react";
import arrowLeft from "./img/articals__arrow-left.png";
import arrowRight from "./img/articals__arrow-right.png";
import articalImg from "./img/articals__artical.jpg";
export default function Artical () {
    return <div className="articals">
        <h1 className="articals__label">Последние статьи</h1>
        <div className="articals__main">
            <div className="slider">
                <div className="item" id="art-1">
                    <figure className="articals__figure">
                        <img className="articals__img" src={articalImg} alt="фото статьи" />
                            <figcaption className="articals__caption">
                                <p className="articals__text">1 такое текст «рыба» знают все, кто работает с <br
                                    className="articals__text_br"/>
                                    версткой журналов, дизайном и разработкой сайтов.<br className="articals__text_br"/>
                                    Этот текст служит для демонстрации того, как<br className="articals__text_br"/>
                                    контент впоследствии будет выглядеть на готовой<br className="articals__text_br"/>
                                    странице, чтобы увидеть, правильно ли<br className="articals__text_br"/>
                                    размещаются абзацы, отступы, хорошо ли смотрятся<br className="articals__text_br"/>
                                    шрифты. Такие рыбные тексты, как правило, не несут<br className="articals__text_br"/>
                                    никакой смысловой нагрузки.
                                </p>
                                <p className="articals__text">На моменте создания макета у дизайнера нет<br
                                    className="articals__text_br"/>
                                    готовых текстов, поэтому генерируется некий<br className="articals__text_br"/>
                                    демонстрационный текст. Некоторые студии<br className="articals__text_br"/>
                                    предпочитают писать такой текст самостоятельно, но<br className="articals__text_br"/>
                                    чаще используются готовые тексты, созданные<br className="articals__text_br"/>
                                    программой – генератором текста. Более того, у<br className="articals__text_br"/>
                                    такого текста есть один неоспоримый плюс –<br className="articals__text_br"/>
                                </p>

                            </figcaption>
                    </figure>
                </div>

                <div className="item" id="art-2">
                    <figure className="articals__figure">
                        <img className="articals__img" src={articalImg} alt="фото статьи" />
                            <figcaption className="articals__caption">
                                <p className="articals__text">2 такое текст «рыба» знают все, кто работает с <br
                                    className="articals__text_br"/>
                                    версткой журналов, дизайном и разработкой сайтов.<br className="articals__text_br"/>
                                    Этот текст служит для демонстрации того, как<br className="articals__text_br"/>
                                    контент впоследствии будет выглядеть на готовой<br className="articals__text_br"/>
                                    странице, чтобы увидеть, правильно ли<br className="articals__text_br"/>
                                    размещаются абзацы, отступы, хорошо ли смотрятся<br className="articals__text_br"/>
                                    шрифты. Такие рыбные тексты, как правило, не несут<br className="articals__text_br"/>
                                    никакой смысловой нагрузки.
                                </p>
                                <p className="articals__text">На моменте создания макета у дизайнера нет<br
                                    className="articals__text_br"/>
                                    готовых текстов, поэтому генерируется некий<br className="articals__text_br"/>
                                    демонстрационный текст. Некоторые студии<br className="articals__text_br"/>
                                    предпочитают писать такой текст самостоятельно, но<br className="articals__text_br"/>
                                    чаще используются готовые тексты, созданные<br className="articals__text_br"/>
                                    программой – генератором текста. Более того, у<br className="articals__text_br"/>
                                    такого текста есть один неоспоримый плюс –<br className="articals__text_br"/>
                                </p>

                            </figcaption>
                    </figure>
                </div>

                <div className="item" id="art-3">
                    <figure className="articals__figure">
                        <img className="articals__img" src={articalImg} alt="фото статьи" />
                            <figcaption className="articals__caption">
                                <p className="articals__text">3 такое текст «рыба» знают все, кто работает с <br
                                    className="articals__text_br"/>
                                    версткой журналов, дизайном и разработкой сайтов.<br className="articals__text_br"/>
                                    Этот текст служит для демонстрации того, как<br className="articals__text_br"/>
                                    контент впоследствии будет выглядеть на готовой<br className="articals__text_br"/>
                                    странице, чтобы увидеть, правильно ли<br className="articals__text_br"/>
                                    размещаются абзацы, отступы, хорошо ли смотрятся<br className="articals__text_br"/>
                                    шрифты. Такие рыбные тексты, как правило, не несут<br className="articals__text_br"/>
                                    никакой смысловой нагрузки.
                                </p>
                                <p className="articals__text">На моменте создания макета у дизайнера нет<br
                                    className="articals__text_br"/>
                                    готовых текстов, поэтому генерируется некий<br className="articals__text_br"/>
                                    демонстрационный текст. Некоторые студии<br className="articals__text_br"/>
                                    предпочитают писать такой текст самостоятельно, но<br className="articals__text_br"/>
                                    чаще используются готовые тексты, созданные<br className="articals__text_br"/>
                                    программой – генератором текста. Более того, у<br className="articals__text_br"/>
                                    такого текста есть один неоспоримый плюс –<br className="articals__text_br"/>
                                </p>

                            </figcaption>
                    </figure>
                </div>
            </div>
            <div className="articals__buttons">
                <div>
                    <button className="articals__buttons_nav" id="previousArt"><img src={arrowLeft}
                                                                                    alt="стрелока влево"/></button>
                    <button className="articals__buttons_nav" id="nextArt"><img src={arrowRight}
                                                                                alt="стрелока вправо"/></button>
                </div>
                <button className="articals__buttons_read_more">Читать подробнее</button>
            </div>
        </div>
    </div>
}