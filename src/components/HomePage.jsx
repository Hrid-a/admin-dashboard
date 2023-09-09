import "../sass/pages/_home.scss";
import Chartbox from "./Chartbox";
import { chartBoxUser, chartBoxRevenue, topDealUsers, chartBoxProduct, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from "../helpers/data";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Areachart from "./Areachart";

const HomePage = () => {
    return (
        <section className="home">
            <article className="home__deals">
                <h2>Top Deals</h2>
                <ul className="flow">
                    {
                        topDealUsers.map(user => <li key={user.id}>
                            <p className="user__image">
                                <img src={user.img} alt={user.username} />
                            </p>
                            <p>
                                <span>{user.username}</span>
                                <span>{user.email}</span>
                            </p>
                            <p>
                                ${user.amount}
                            </p>
                        </li>)
                    }

                </ul>
            </article>
            <article>
                <Chartbox {...chartBoxUser} />
            </article>
            <article className="cart__box"> <Chartbox {...chartBoxRevenue} /> </article>
            <article>

                <Piechart />
            </article>
            <article className="cart__box"> <Chartbox {...chartBoxProduct} /> </article>
            <article className="cart__box"> <Chartbox {...chartBoxConversion} /> </article>
            <article> <Areachart /> </article>
            <article> <Barchart {...barChartBoxVisit} /> </article>
            <article> <Barchart {...barChartBoxRevenue} /> </article>
        </section>
    )
}

export default HomePage