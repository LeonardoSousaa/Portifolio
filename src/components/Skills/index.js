import "./style.css";

export default function Skills(props) {
    return (
<section className="skills">
    <h4 className="tituto_skills">Skills</h4>
    <ul className="ul_skills">
            <li className="bloco_skill">
                <img className="html" src=""/>
            </li>
        <li className="bloco_skill">
            <img src="./../../../../Html.jpg" className="javascript"/>
        </li>


        <li className="bloco_skill">
            <img src="./../../../../Photoshop.png" className="photoshop"/>
        </li>


        <li className="bloco_skill">
            <img src="./../../../../React.png" className="react"/>
        </li>
    
        <li className="bloco_skill">
            <img src="./../../../../CSS.png" className="css"/>
        </li>
    </ul>
</section>
    );
  }