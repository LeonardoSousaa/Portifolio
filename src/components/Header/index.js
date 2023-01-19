import "./style.css";
import Logo from './../../assets/images/Logo.png';

export default function Header(props) {

    return (
        <header>
            <nav>
                <div>
                    <a className="logo"></a><img src={Logo} alt="Logo"/>
                </div>
                {props.children}
            </nav>
    </header>
    );
  }