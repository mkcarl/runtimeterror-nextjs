import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";



export default function RequestView() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data)
    }, [data]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/requests`)).json()
            setData(res)

        }
        if (loading){
            fetchData().catch(console.error)
            setLoading(false)
        }
    }, [loading])

    const requestTableColumnDef = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'Body', headerName: 'Body', width: 150},
        {field: 'Sender_email', headerName: 'Sender_email', width: 150},
        {field: 'Status', headerName: 'Status', width: 150},
        {field: 'timestamp', headerName: 'timestamp', width: 150},
        {
            headerName: 'Action', width: 150, renderCell: (params) => {
                const handleOnClick = async () => {
                    await fetch(
                        `${process.env.NEXT_PUBLIC_API_HOST}/requests/approve`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',

                            },
                            body: JSON.stringify({id: params.row.id})
                        }
                    )
                    setLoading(true)
                }

                return <Button onClick={handleOnClick} key={params.row.id} disabled={params.row.Status=='approved'} variant={'outlined'}>Approve</Button>
            }
        }
    ]

    return (
        <Box>
            <Typography variant={'h1'}>Order Requests</Typography>
            <Box sx={{width: 'auto', height: 500}}>
                <DataGrid columns={requestTableColumnDef} rows={data ?? []}
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
