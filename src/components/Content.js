import React from "react";

export default function Content() {
 return (
  <div className="content__item">
   <div className="content__image">
    <img src={require("../images/me.jpg")} alt="me" />
   </div>
   <div className="content__body">
    <p>
     My name is Hanna Tylna. I am a beginner programmer. I like people and
     coding. So I feel happy when I can do some code in a company of good
     people. Perfect if the first one can result in something useful.
    </p>
   </div>
  </div>
 );
}
