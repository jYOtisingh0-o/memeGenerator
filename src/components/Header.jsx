import React from "react";

export default function Header(){
    return (
        <header className="header">
            <img 
                src="./assets/troll-face.png"
                className="header--image"
            />
            <h2 className="header--title" alt="troll face logo">Meme Generator</h2>
            <h4 className="header--project">Built by Jyoti</h4>
        </header>
    )
}