import './Sugestoes.css';
import img_perfil from './eu.jpeg';
import neymar_perfil from './neymar_perfil.jpg';
import vinijr from './vinijr_perfil.jpg';
import hari from './hariel_perfil.jpg';
import snoop from './snoopdog_perfil.jpg';
import gabriel from './gabriel_perfil.jpg';

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
                        <img src={neymar_perfil} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>neymarjr</h4>
                            <h5>Seguido(a) por <span>l7nnon</span></h5>
                        </div>
                        <p className="p_seguido">Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={vinijr} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>vinijr</h4>
                            <h5>Seguido(a) por <span>filiperet</span></h5>
                        </div>
                        <p className="p_seguido_2">Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={hari} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>mchariel</h4>
                            <h5>Seguido(a) por <span>bkttlapa</span></h5>
                        </div>
                        <p className="p_seguido_3">Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={snoop} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>snoopdogg</h4>
                            <h5>Seguido(a) por <span>lucasfink</span></h5>
                        </div>
                        <p className="p_seguido_4">Seguir</p>
                    </div>
                    <div className="sugestao">
                        <img src={gabriel} alt="imagem do prefil" />
                        <div className="txt_sugestao">
                            <h4>gab.augustoz</h4>
                            <h5>Novo(a) no instagram</h5>
                        </div>
                        <p className="p_novo">Seguir</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sugestoes