import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "../sass/pages/_dataTable.scss";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from 'react-router-dom';


export default function DataGridDemo({ rows, columns, url }) {
    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={"/" + url + "/" + params.row.id} className='link'>
                        <RxUpdate />
                    </Link>
                    <span>
                        <MdDeleteOutline />
                    </span>
                </div>
            )
        }
    }
    return (
        <div className="data-table">

            <DataGrid
                className='data-grid'
                rows={rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar,
                    quickFilterProps: { debounceMs: 500 }
                }}
                slotProps={{
                    toolbar: { showQuickFilter: true },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />
        </div>

    );
}
