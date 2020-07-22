import React from "react";
import "./Comments.scss"
import arrowLeft from "../Articals/img/articals__arrow-left.png";
import arrowRight from "../Articals/img/articals__arrow-right.png"
export default function Comments() {
 return <div className="comment">
     <h1 className="comment__label">Отзывы о нас</h1>
     <div className="slider-comments">
         <div className="item-com" id="com-1">
             <div className="comment__main">
                 <p className="comment__text">Что такое текст «рыба» знают все, кто работает с <br
                     className="comment__text_br"/>
                     версткой журналов, дизайном и разработкой сайтов.<br className="comment__text_br"/>
                     Этот текст служит для демонстрации того, как<br className="comment__text_br"/>
                     контент впоследствии будет выглядеть на готовой<br className="comment__text_br"/>
                     странице, чтобы увидеть, правильно ли<br className="comment__text_br"/>
                     размещаются абзацы, отступы, хорошо ли смотрятся<br className="comment__text_br"/>
                     шрифты. Такие рыбные тексты, как правило, не несут<br className="comment__text_br"/>
                     никакой смысловой нагрузки.
                 </p>
                 <p className="comment__text">На моменте создания макета у дизайнера нет<br
                     className="comment__text_br"/>
                     готовых текстов, поэтому генерируется некий<br className="comment__text_br"/>
                     демонстрационный текст. Некоторые студии<br className="comment__text_br"/>
                     предпочитают писать такой текст самостоятельно, но<br className="comment__text_br"/>
                     чаще используются готовые тексты, созданные<br className="comment__text_br"/>
                     программой – генератором текста. Более того, у<br className="comment__text_br"/>
                     такого текста есть один неоспоримый плюс –<br className="comment__text_br"/>
                 </p>
             </div>
         </div>
         <div className="item-com" id="com-2">
             <div className="comment__main">
                 <p className="comment__text">Что такое текст «рыба» знают все, кто работает с <br
                     className="comment__text_br"/>
                     версткой журналов, дизайном и разработкой сайтов.<br className="comment__text_br"/>
                     Этот текст служит для демонстрации того, как<br className="comment__text_br"/>
                     контент впоследствии будет выглядеть на готовой<br className="comment__text_br"/>
                     странице, чтобы увидеть, правильно ли<br className="comment__text_br"/>
                     размещаются абзацы, отступы, хорошо ли смотрятся<br className="comment__text_br"/>
                     шрифты. Такие рыбные тексты, как правило, не несут<br className="comment__text_br"/>
                     никакой смысловой нагрузки.
                 </p>
                 <p className="comment__text">На моменте создания макета у дизайнера нет<br
                     className="comment__text_br"/>
                     готовых текстов, поэтому генерируется некий<br className="comment__text_br"/>
                     демонстрационный текст. Некоторые студии<br className="comment__text_br"/>
                     предпочитают писать такой текст самостоятельно, но<br className="comment__text_br"/>
                     чаще используются готовые тексты, созданные<br className="comment__text_br"/>
                     программой – генератором текста. Более того, у<br className="comment__text_br"/>
                     такого текста есть один неоспоримый плюс –<br className="comment__text_br"/>
                 </p>
             </div>
         </div>
         <div className="item-com" id="com-3">
             <div className="comment__main">
                 <p className="comment__text">Что такое текст «рыба» знают все, кто работает с <br
                     className="comment__text_br"/>
                     версткой журналов, дизайном и разработкой сайтов.<br className="comment__text_br"/>
                     Этот текст служит для демонстрации того, как<br className="comment__text_br"/>
                     контент впоследствии будет выглядеть на готовой<br className="comment__text_br"/>
                     странице, чтобы увидеть, правильно ли<br className="comment__text_br"/>
                     размещаются абзацы, отступы, хорошо ли смотрятся<br className="comment__text_br"/>
                     шрифты. Такие рыбные тексты, как правило, не несут<br className="comment__text_br"/>
                     никакой смысловой нагрузки.
                 </p>
                 <p className="comment__text">На моменте создания макета у дизайнера нет<br
                     className="comment__text_br"/>
                     готовых текстов, поэтому генерируется некий<br className="comment__text_br"/>
                     демонстрационный текст. Некоторые студии<br className="comment__text_br"/>
                     предпочитают писать такой текст самостоятельно, но<br className="comment__text_br"/>
                     чаще используются готовые тексты, созданные<br className="comment__text_br"/>
                     программой – генератором текста. Более того, у<br className="comment__text_br"/>
                     такого текста есть один неоспоримый плюс –<br className="comment__text_br"/>
                 </p>
             </div>
         </div>
     </div>

     <div className="comment__buttons">
         <button className="comment__buttons_nav" id="previousCom"><img src={arrowLeft}
                                                                        alt="стрелочка влево"/></button>
         <button className="comment__buttons_nav" id="nextCom"><img src={arrowRight}
                                                                    alt="стрелока вправо"/></button>
     </div>


 </div>
}