import "./style.css";

const Nav = () => {
    return (
        <nav id="navi">
            <ul className="nav__list section__boxModel">
                <li><a className="nav__link" href="#o-mnie">👨Króciotko o mnie👨</a></li>
                <li><a className="nav__link" href="#szkola">🏫Szkoła🏫</a></li>
                <li><a className="nav__link" href="#moje-pasje">🔎Moje pasje🔎</a></li>
                <li><a className="nav__link" href="#muzyka">🎵Troszkę o muzyce🎵</a></li>
            </ul>
        </nav>
    )
};

export default Nav;