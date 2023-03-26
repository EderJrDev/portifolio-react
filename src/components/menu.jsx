
import '../css/menu.css';

export function Menu() {
    return (
        <>
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
        </>
    )
}