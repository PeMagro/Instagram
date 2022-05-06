import './Sugestoes.css';
import img_perfil from './eu.jpeg';
import proa_logo from './proa_logo.png'

function Sugestoes(){
    return(
        <div className="Sugestoes">
            <section className="perfil">
                <img src={img_perfil} alt="imagem do prefil" />
                <div className="txt_perfil">
                    <h4>pe.magro</h4>
                    <h5>Pedrinho</h5>
                </div>
                <p>Mudar</p>
            </section>
            <section className="sugestoes_voce">
                <p className="txt_1">Sugestões para você</p>
                <p className="txt_2">Ver tudo</p>
                <div className="sugestoes_perfil">
                    <div className="sugestao">
                        <img src={proa_logo} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>instituto.proa</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p>Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={proa_logo} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>instituto.proa</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p>Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={proa_logo} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>instituto.proa</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p>Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={proa_logo} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>instituto.proa</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p>Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={proa_logo} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>instituto.proa</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p>Seguir</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sugestoes