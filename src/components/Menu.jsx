import { menu } from "../helpers/data";
import MenuItem from "./MenuItem";
import "../sass/pages/_menu.scss";
const Menu = () => {

    return (
        <div>
            <nav className="menu">
                {menu.map(item => <MenuItem key={item.id} title={item.title} data={item.listItems} />)}
            </nav>

        </div>
    )
}

export default Menu