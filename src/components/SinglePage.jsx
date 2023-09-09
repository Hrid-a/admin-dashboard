import "../sass/pages/_singlepage.scss";
const SinglePage = ({ img, title, info, activities }) => {
    return (
        <div className="item">

            <div className="item__view">
                <div className="item__info">
                    <div className="item__info--personal">
                        {img && <img src={img} alt={title} className="item__img" />}
                        <span>{title}</span>
                        <button className="btn">Update</button>
                    </div>
                    <div className="item__details flow">
                        {Object.entries(info).map((item) =>
                            <p key={item[0]}>
                                {item[0]}: <span>{item[1]}</span>
                            </p>)}
                    </div>
                </div>
            </div>
            <div className="item__activities">
                <h3>Latest activities</h3>
                <div>
                    {activities && activities.map(activity => <p key={activity.id}>
                        <span>{activity.text}</span>
                        <span>{activity.time}</span>
                    </p>)}

                </div>
            </div>
        </div>
    )
}

export default SinglePage

