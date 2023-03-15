import React from "react";
import './ItemStyle.css';
export default function Item(){
    return(
        <div className="Item-card">
            <div className="Item-card_header">
                <h3>Remera nike</h3>
            </div>
            <img src="/IMG/RemeraNike.webp" height={250} alt="Es un modelo de remera" />
            <h4>$1500</h4>
            <small>Remera con el logo de Nike, super comoda.</small>
        </div>
    )
}

