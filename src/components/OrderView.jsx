import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

const orderTableColumnDef = [
    {field: 'id', headerName: 'ID', width: 200},
    {
        field: 'items', headerName: 'Items', width: 400, valueFormatter: (params) => {
            if (!params.value) return ('')
            return Object.entries(params.value).map(([name, quantity]) => {
                return `${name} x${quantity}`
            }).join(', ')

        }
    },
    {field: 'fulfilled', headerName: 'Order Status', width: 150, valueFormatter: ({value}) => value ? 'Fulfilled': 'Pending'},
    {
        field: 'request', headerName: 'Request ID', width: 150,
    },
    {
         headerName: 'Action', width: 150,
        valueGetter: ({ row }) => {

        },
        renderCell: (params) => {
            const handleOnClick = async () => {
                await fetch(
                    `${process.env.NEXT_PUBLIC_API_HOST}/orders/approve`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',

                        },
                        body: JSON.stringify({id: params.row.id})
                    }
                )
            }
            return <Button variant={'outlined'} onClick={handleOnClick} disabled={params.row.fulfilled}>Approve</Button>
        }
    }
]
export default function OrderView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        const fetchData = async () => {
            const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/orders`)).json()
            setData(res)
        }

        fetchData().catch(console.error)
    }, [])

    return (
        <Box>
            <Typography variant={'h1'}>Orders</Typography>
            <Box sx={{width: 'auto', height: 500}}>
                <DataGrid columns={orderTableColumnDef} rows={data ?? []}
                          initialState={{
                              sorting: {
                                  sortModel: [{field: 'id', sort: 'asc'}],
                              },
                          }}
                />

            </Box>
        </Box>
    )


}
