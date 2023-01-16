import './App.css';
import SobreMim from './components/SobreMim'
import Skills from './components/Skills'
import Header from './components/Header'
import Footer from './components/Footer'
import Formacoes from './components/Formacoes'
import Contatos from './components/Contatos'
import Inicio from './components/Inicio'

function App() {
  return (
    <div>
      <Header/>
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
