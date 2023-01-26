import "./style.css";
import Peso from './../../assets/images/Peso.png'
import SFings from './../../assets/images/SFings.png'

export default function Header(props) {
    return (

    <section className="section_projetos">

        <h1 className="titutlo_projetos">Projetos Criados</h1>


    <div className="projetos">

        <a href="#"><img className="imagem_site_peso" src={Peso} alt="" /></a>

        <div className="textos_botoes_projetos">
            <div className="conjunto_textos_projetos">
                <h1 className="h1_titulo_projeto_academia">Calculadora de Dieta</h1>
                <p>Calcule os macro-nutriendes da sua dieta de maneira rápida e pratica.</p>
                <p>Habilidades desenvolvidas: Figma, Photoshop, HTML, CSS, Javascript e React.js</p>
            </div>

            <div className="conjunto_botoes_projetos">
                <a href="https://github.com/LeonardoSousaa/Site-Calculadoras-Saude" target="_blanck"><button className="botao_repositorio">Repositório</button></a>
                <a href="https://leonardosousaa.github.io/Site-Calculadoras-Saude/" target="_blanck"><button className="botao_ver_site">Ver Site</button></a>
            </div>

        </div>

    </div>

        </section>
    );
  }