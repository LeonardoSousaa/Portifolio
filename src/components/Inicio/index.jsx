import "./style.css";
import Rosto from './../../assets/images/Rosto.png'
import Vector from './../../assets/images/Vector.png'

export default function Inicio(props) {

    const menu = [
        {
            label:'Github',
            href:"#Github",
        },        {
            label: 'Linkedin', 
            href:"#Linkedin"
        },
        {
            label: 'Currículo', 
            href:"#Currículo"
        },

    ]
    return (
    <section className="inicio">
    <aside>
        <h2>Olá, meu nome é Leonardo Candido e sou desenvolvedor front-end</h2>

        <img className="mobile-rosto" src={Rosto} alt=""/>

        <p className="texto_inicio">Sou apaixonado por tecnologia e estou me especializando em front-end. Criei este portfólio para demonstrar minhas habilidades e projetos em um só lugar.</p>


        <ul className="ul_segundario">

        { menu.map(item => (
        <a href={item.href}><li className="menu_segundario">{item.label}<img src={Vector} alt="" className="vector" /></li></a>
        )) }


        </ul>


        </aside>  

            <article className="rosto">
            <img src={Rosto} alt="Rosto"/>
            </article>

    </section>
    );
  }