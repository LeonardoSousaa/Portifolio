import "./style.css";
import HTML from './../../assets/images/Html.png';
import CSS from './../../assets/images/CSS.png';
import Photoshop from './../../assets/images/Photoshop.png';
import React from './../../assets/images/React.png'
import Javascript from './../../assets/images/Javascript.png'

export default function Skills(props) {
    return (
<section className="skills">
    <h4 className="tituto_skills">Skills</h4>
    <ul className="ul_skills">
            <li className="bloco_skill">
                <img className="html" src=""/>
            </li>
        <li className="bloco_skill">
            <img src={HTML} className="html"/>
        </li>

        <li className="bloco_skill">
            <img src={CSS} className="css"/>
        </li>

        <li className="bloco_skill">
            <img src={Photoshop} className="photoshop"/>
        </li>

        <li className="bloco_skill">
            <img src={Javascript} className="javascriptt"/>
        </li>

        <li className="bloco_skill">
            <img src={React} className="react"/>
        </li>
    </ul>
</section>
    );
  }