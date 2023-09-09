import { useState } from "react"
import { products } from "../helpers/data"
import Add from "./Add";
import DataTable from "./DataTable";

const Products = () => {
    const [open, setOpen] = useState(false);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 150,
            renderCell: (params) => {
                return (<img src={params.row.img || "/noavatar.png"} alt="avatar" />);
            }
        },
        {
            field: 'title',
            headerName: 'Title',
            type: 'text',
            width: 160,
        },
        {
            field: 'color',
            headerName: 'Color',
            type: 'text',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'text',
            width: 150,
        },
        {
            field: 'producer',
            headerName: 'Producer',
            width: 150,
            type: 'text',
        },
        {

            field: 'createdAt',
            headerName: 'Created At',
            width: 180,
            type: 'text',
        },
        {
            field: 'inStock',
            headerName: 'In Stock',
            type: 'boolean',
            width: 160,
        }
    ];

    return (
        <div className="flex-1">
            <div className="head">
                <h2>Products</h2>
                <button onClick={() => setOpen(true)} className="btn">add a new product</button>
            </div>
            <DataTable url={"products"} rows={products} columns={columns} />
            {open && <Add title={"product"} setOpen={setOpen} columns={columns} />}
        </div>
    )
}

export default Products