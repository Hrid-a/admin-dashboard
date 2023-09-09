import SinglePage from "./SinglePage"
import { singleUser } from "../helpers/data";

const User = () => {
    return (
        <div className="flex-1">
            <SinglePage  {...singleUser} />
        </div>
    )
}

export default User;