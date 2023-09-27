import "./App.css";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'atropos/css'

import { Menu } from "./components/menu";
import { Home } from "./components/home";
import { Tech } from "./components/tech";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div className="header">
        <Menu sobreId="sobre" projetosId="projetos" contatosId="contatos" />
        <Home />
      </div>
      <div className="bg-black">
        <Tech />
      </div>
      <Projects />
      <div id="hero-3" className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default App;
