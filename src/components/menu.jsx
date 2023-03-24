
import '../css/menu.css';
import '../js/menu';

export function Menu() {
    return (
        <>
            <h2 className="info">Full Page Navigation</h2><button className="nav-button">
                <div className="line line__1"></div>
                <div className="line line__2"></div>
                <div className="line line__3"></div>
            </button><nav>
                <div className="nav__background"></div>
                <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">About</a></li>
                    <li><a href="#0">Contact</a></li>
                    <li><a href="#0">Dance</a></li>
                </ul>
            </nav><div className="support">
                <a href="https://twitter.com/DevLoop01" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a href="https://codepen.io/dev_loop/" target="_blank"><i className="fab fa-codepen"></i></a>
            </div>
        </>
    )
}