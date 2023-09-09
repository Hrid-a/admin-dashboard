import { Link } from "react-router-dom";

const MenuItem = (props) => {
    const { title, data } = props;
    return (
        <>
            <h3 className="menu__title">{title}</h3>
            <ul className="menu__items">
                {data.map(item => (<li key={item.id}>
                    <Link to={item.url} className="menu__item">
                        <div>
                            <img className="menu__icon" src={item.icon} alt={item.title} />
                        </div>
                        <span className="menu__link">{item.title}</span>
                    </Link>
                </li>))}
            </ul>
        </>
    )
}

export default MenuItem