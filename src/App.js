import './App.css';
import SobreMim from './components/SobreMim'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Formacoes from './components/Formacoes'
import Contatos from './components/Contatos'
import Inicio from './components/Inicio'
import { Header, Menu } from './components/index';

function App() {
  return (
    <div>
      <Header><Menu/></Header>
      <Inicio/>
      <SobreMim/>
      <Skills/>
      <Formacoes/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
