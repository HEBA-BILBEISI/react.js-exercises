import React from "react;"

import "./Card-style.css";



const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="rami" className="card-img-top"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{ props.job}</p>
                <a href="" className="btn button-outline-success">{ props.link}</a>
            
            </div>
            
            
            



        </div>
    );
}

export default Card; 