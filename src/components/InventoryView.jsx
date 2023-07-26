import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import {configDotenv} from 'dotenv'

configDotenv()

const inventoryTableColumnDef = [
    {field: 'IngredientID', headerName: 'IngredientID', width: 150},
    {field: 'Name', headerName: 'Name', width: 150},
    {field: 'PricePerUnit', headerName: 'PricePerUnit', width: 150},
    {field: 'Quantity', headerName: 'Quantity', width: 150},
    {field: 'Unit', headerName: 'Unit', width: 150},

]

export default function InventoryView(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data)
    }, [data]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/inventory`)).json()
            setData(res)

        }
        const fetchDummyData = async () => {
            setData([
                {
                    "IngredientID": "I015",
                    "Name": "spinach",
                    "PricePerUnit": 20,
                    "Quantity": 6700,
                    "Unit": "kg"
                },
                {
                    "IngredientID": "I003",
                    "Name": "red onion",
                    "PricePerUnit": 11,
                    "Quantity": 9800,
                    "Unit": "kg"
                },
                {
                    "IngredientID": "I011",
                    "Name": "chilli",
                    "PricePerUnit": 20,
                    "Quantity": 4000,
                    "Unit": "kg"
                },
            ])
        }
        fetchData().catch(console.error)
        // fetchDummyData().catch(console.error)
    }, []);

    return (
        <Box>
            <Typography variant={'h1'}>Inventory</Typography>
            <Box sx={{width:'auto', height:500}}>
                <DataGrid columns={inventoryTableColumnDef} rows={data??[]} getRowId={ (row)=>row.IngredientID }
                          initialState={{
                              sorting: {
                                  sortModel: [{ field: 'IngredientID', sort: 'asc' }],
                              },
                          }}
                />

            </Box>


        </Box>
    )
}
