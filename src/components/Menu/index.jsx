import "./style.css";
import { useState } from "react";

export default function Menu() {

    const [clicked, setClicked] = useState(false);

    const items = [
        {
            label: 'Sobre mim', 
            href:"#sobre_mim"
        },
        {
            label: 'Skills', 
            href:"#skills"

        },
        {
            label: 'Formação', 
            href:"#formacao"

        },
        {
            label: 'Leonardosousa@gmail.com', 
            href:"##email"

        },
    ]

    return (
    <nav>
        <div className={`menu_mobile ${clicked ? 'menu_clicked' : ''}`} onClick={() => setClicked(!clicked)}>
            <div className="linha1"></div>
            <div className="linha2"></div>
            <div className="linha3"></div>
        </div>
            <ul className="nave-lista">
                
        { items.map(item => (
            <a href={item.href}><li className="menu_principal">{item.label}</li></a>
        )) }
        </ul>
    </nav>
    );
  }