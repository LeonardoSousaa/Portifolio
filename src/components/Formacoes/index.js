
import "./style.css";

export default function Skills(props) {
    return (
        <section className="formacao">
            <h5>Formação acadêmica</h5>

            <div className="bloco_formacao">
                <ul className="ul_formacao">
                    <li><img src="./../../../../anhembi.png" alt="" width="100%"/></li>
                    <p className="p_bloco_formacao">Termino previsto - Jun/2024</p>
                    <h1>Analise e Desenvolvimento de Sistemas</h1>
                </ul>
            </div>

            <div className="bloco_formacao">
                <ul className="ul_formacao">
                    <li><img src="./../../../../alura.png" alt="" width="100%"/></li>
                    <p className="p_bloco_formacao">Termino previsto - Jan/2023</p>
                    <h1>Formação em Front-End do Básico ao avançado</h1>
                </ul>
            </div>

        </section>
    );
  }
