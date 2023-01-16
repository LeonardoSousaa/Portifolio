import "./style.css";

export default function Inicio(props) {
    return (
        <section class="inicio">
            <aside>
                <h2>Olá, meu nome é Leonardo Candido e sou desenvolvedor front-end</h2>
                <img class="rosto_mobile" src="./../../../../Rosto.png.png" alt="Rosto"/>
                <p class="texto_inicio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <ul class="ul_segundario">
                    <li class="menu_segundario" id="github">Github <img src="./../../../../Vector.png"/></li>
                    <li class="menu_segundario">Linkedin <img src="./../../../../Vector.png"/></li>
                    <li class="menu_segundario">Currículo <img src="./../../../../Vector.png"/></li>
                </ul>

            </aside>   

            <article class="rosto">
                <img src="./../../../../Rosto.png.png" alt="Rosto"/>
            </article>
        </section>
    );
  }