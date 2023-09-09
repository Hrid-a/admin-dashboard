import { FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { MdNotifications, MdSettings } from "react-icons/md";
import { PiSquaresFourDuotone } from "react-icons/pi";
import "../sass/pages/_header.scss";
import { useState } from "react";
const Header = () => {
    const [opened, setOpened] = useState(false);

    return (
        <header>
            <div className="logo">Admin</div>
            <button className="nav-toggle" onClick={() => setOpened(prev => !prev)}>
                {opened ? <FaTimes /> : <FaBars />}
                <span className="sr-only">{opened ? "open the menu" : "close the menu"}</span>
            </button>
            <nav className={"nav" + (opened ? "" : " closed")}>
                <ul className="nav__items">
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <FaSearch />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <PiSquaresFourDuotone />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <MdNotifications />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <FaUserCircle />
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            Ahmed
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <MdSettings />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header