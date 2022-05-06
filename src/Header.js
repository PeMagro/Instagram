import './Header.css';
import insta_logo from './instagram_logo.png';
import home_icon from './home_escuro.png';
import messenger_icon from './messenger.png';
import stories_icon from './stories.png';
import explore_icon from './explore.png';
import notifications from './heart.png';
import perfil_img from './eu.jpeg';

function Header() {
    return (
        <div className="Header">
            <div className="header_base">
            <header className="cabecalho">
                <div className="header_logo">
                    <img src={insta_logo} alt="imagem escrita Instagram" />
                </div>
                <div className="header_pesquisa">
                    <input type="search" placeholder="Pesquisar" />
                </div>
                <div className="header_icones">
                    <div className="icones_base">
                        <button><img src={home_icon} className="icons" alt="imagem para home" /></button>
                        <button><img src={messenger_icon} className="icons" alt="imagem para mensagens" /></button>
                        <button><img src={stories_icon} className="icons" alt="imagem para adicionar stories" /></button>
                        <button><img src={explore_icon} className="icons" alt="imagem do explore" /></button>
                        <button><img src={notifications} className="icons" alt="imagem de notificações" /></button>
                        <button><img src={perfil_img} className="img_redonda" alt="imagem de perfil" /></button>
                    </div>
                </div>
            </header>
            </div>
        </div>
    );
}

export default Header