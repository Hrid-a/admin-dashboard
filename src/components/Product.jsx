import { singleProduct } from "../helpers/data"
import SinglePage from "./SinglePage"

const Product = () => {
    return (
        <div className="flex-1">
            <SinglePage  {...singleProduct} />
        </div>
    )
}

export default Product