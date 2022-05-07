import { useEffect, useState, useRef } from 'react';
import './Stories.css';

function Stories(){

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/stories.json' && 'https://instagram-beta-eight.vercel.app/static/stories.json')
        .then((response) => response.json())
        .then(setData);
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;

    return(
        <div className="Stories">

            <div className="base_stories" ref={carousel}>
            {data.map((item) => {
                const {id, name, image} = item;
                return(
            <div className="itens_stories" key={id}>
                <div className="img_stories">
                    <img src={image} alt="imagem para stories de Pedro Magro" />
                </div>
                <div className="nome_stories">
                    <p className="name">{name}</p>
                </div>
            </div>
            );
            })}
            </div>

            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img src="/static/images/seta_direita_2.png" alt="Voltar" className="seta_esquerda" />
                </button>
                <button onClick={handleRightClick}>
                    <img src="/static/images/seta_direita_2.png" alt="Avançar" className="seta_direita" />
                </button> 
            </div>

        </div>
    );
};

export default Stories