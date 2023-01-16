import "./style.css";

export default function SobreMim(props) {
    const menu = [
        {
            label: 'Sobre mim', 
            href:"#sobre_mim"
        },        {
            label: 'Teste 01', 
            href:"#Teste01"
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
        <header>

        <nav>

            <div>
             <a class="logo"></a><img src="./../../../../Logo.png" alt="Logo"/>
            </div>


            <div class="menu_mobile">
                <div class="linha1"></div>
                <div class="linha2"></div>
                <div class="linha3"></div>
            </div>


                <ul class="nave-lista" >
                { menu.map(item => (
                    <a href={item.href}><li class="menu_principal">{item.label}</li></a>

)) }
                </ul>

        </nav>
    </header>
    );
  }


/*import "./style.css";

export default function Header(props) {
    return (

    <header>

        <section className="navegacao">
            

            <img className="logo"/>

            <ul>
                <li class="menu_principal">Sobre mim</li>
                <li class="menu_principal">Skills</li>
                <li class="menu_principal">Formação</li>
                <li class="menu_principal">Projetos</li>
                <li class="menu_principal">Leonardosousa@gmail.com</li>
            </ul>

        </section>
    </header>
    );
  }*/