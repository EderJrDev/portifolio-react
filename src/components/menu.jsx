import React from 'react';
import { useState } from 'react';

import '../css/menu.css';

export function Menu(props) {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleClickLink = () => {
        const divElement = document.querySelector('.close');
        divElement.click();
        setMenuAberto(false); // fechar o menu
    };

    return (
        <>
            <div className={`menu ${menuAberto ? 'aberto' : ''}`}>
                <input type="checkbox" id="active" />
                <label for="active" className="menu-btn"><span></span></label>
                <label for="active" className="close"></label>
                <div className="wrapper">
                    <ul>
                        <li><a onClick={handleClickLink} href={`#${props.sobreId}`} id={`${props.sobreId}-link`} >Sobre</a></li>
                        <li><a onClick={handleClickLink} href={`#${props.projetosId}`} id={`${props.projetosId}-link`}>Projetos</a></li>
                        <li><a onClick={handleClickLink} href={`#${props.contatosId}`} id={`${props.contatosId}-link`}>Contatos</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}