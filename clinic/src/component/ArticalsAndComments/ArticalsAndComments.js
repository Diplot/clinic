import React from "react";
import Artical from "./Articals/Artical";
import Comments from "./Сomments/Comments";
export default function ArticalsAndCommnets () {
    return <section className="container articals_comment">
            <Artical />
            <Comments />
           </section>
}