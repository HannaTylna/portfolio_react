import React from 'react';

export default function Content(){
    return (
        <div className="content">
            <div className="container">
                <div className="content__text">
                    <img src={require("../images/me.jpg")} alt="me" />
                </div>
            </div>
        </div>
    )
}