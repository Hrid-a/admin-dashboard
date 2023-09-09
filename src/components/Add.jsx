import "../sass/pages/_modal.scss";
import { FaTimesCircle } from "react-icons/fa";

const Add = ({ title, setOpen, columns }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // do some api to add to users list
    }
    return (
        <div className="add">
            <div className="modal">
                <span onClick={() => setOpen(false)}><FaTimesCircle /></span>
                <h4>add {title}</h4>
                <form onSubmit={() => handleSubmit(e)}>
                    {columns.filter(column => column.field !== "id" && column.field !== "avatar" && column.type !== "boolean")
                        .map(column => (
                            <div key={column.field} className="item">
                                <label htmlFor={column.field}>{column.headerName}</label>
                                <input type={column.type} id={column.field} placeholder={column.headerName} required />
                            </div>
                        ))}

                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add