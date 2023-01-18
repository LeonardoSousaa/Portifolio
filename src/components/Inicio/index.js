import "./style.css";

export default function Inicio(props) {

    const menu = [
        {
            label: 'Github', 
            href:"#Github"
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
        <img className="rosto_mobile" src="./../../../../Rosto.png.png" alt="Rosto"/>
        <p className="texto_inicio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


        <ul className="ul_segundario">

        { menu.map(item => (
        <a href={item.href}><li className="menu_segundario">{item.label}</li></a>
        )) }


        </ul>


        </aside>  

            <article className="rosto">
                <img src="./../../../../Rosto.png.png" alt="Rosto"/>
            </article>

    </section>
    );
  }