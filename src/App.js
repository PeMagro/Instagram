import './App.css';
import Header from './Header';
import Conteudo from './Conteudo';
import Sugestoes from './Sugestoes';
import Stories from './Stories';

function App() {
  return (
    <div className="App">

      <section className="section_header">
      <Header />
      </section>

      <main className="main_home">
        <section className="section_feed">
          <Stories />
          <Conteudo />
        </section>
      </main>
      <section className="section_sugestoes">
          <Sugestoes />
      </section>
    </div>
  );
};

export default App;
