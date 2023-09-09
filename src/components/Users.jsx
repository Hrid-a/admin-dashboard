import { useState } from "react";
import { userRows } from "../helpers/data"
import DataTable from "./DataTable"
import Add from "./Add";

const Users = () => {
    const [open, setOpen] = useState(false)
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
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            type: 'text',
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
            type: 'text',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 150,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'verified',
            headerName: 'Verified',
            width: 150,
            type: 'boolean',
        },
    ];


    return (
        <div className="flex-1">
            <div className="head">
                <h2>Users</h2>
                <button onClick={() => setOpen(true)} className="btn">add a new user</button>
            </div>
            <DataTable url={"users"} rows={userRows} columns={columns} />
            {open && <Add title={"user"} setOpen={setOpen} columns={columns} />}
        </div>
    )
}

export default Users