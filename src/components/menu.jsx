import React from 'react';
import '../css/menu.css';

export function Menu(props) {
    function handleClickSobre() {
        const element = document.getElementById(props.sobreId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                <ul>
                    <li><a href={`#${props.sobreId}`} id={`${props.sobreId}-link`} onClick={handleClickSobre} target='_blank' >Sobre</a></li>
                    <li><a href={`#${props.projetosId}`} id={`${props.projetosId}-link`} target='_blank'>Projetos</a></li>
                    <li><a href={`#${props.contatosId}`} id={`${props.contatosId}-link`} target='_blank'>Contatos</a></li>
                </ul>
            </div>
        </>
    )
}