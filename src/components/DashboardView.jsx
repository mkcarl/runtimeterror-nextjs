//
// number of request (approve and pending
// num of orders (approve and pending
// total inventory out
// total sales
//
import Box from "@mui/material/Box";
import DashboardPanel from "@/components/DashboardPanel";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import InfoPanel from "@/components/InfoPanel";
import {useEffect, useState} from "react";


export default function DashboardView() {
    const [data, setData] = useState()
    const pieChartData = [
        {value: 100, label: 'tomato' },
        {value: 150, label: 'carrot' },
        {value: 200, label: 'cabbage' },
    ]

    useEffect(() => {
        const fetchData = async () => {
            const res = await (await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/dashboard`)).json()
            setData(res)
        }

        fetchData().catch(console.error)
    }, []);

    if (!data) return (<div>loading</div>)

    return (
        <Box sx={{display: 'flex', flexWrap:'wrap'}}>
            <Box id={'first-row'} sx={{display:'flex', width:'100%'}}>
                <InfoPanel id={'request-panel'} title={'Requests'} data={data.requests}/>
                <InfoPanel id={'order-panel'} title={'Orders'} data={data.orders}/>
                <InfoPanel id={'inventory-panel'} title={'Inventory'} data={data.inventory}/>

            </Box>
            <Box id={'second-row'} sx={{display:'flex', width:'100%'}}>
                {/*<DashboardPanel title={'Out inventory'}>*/}
                {/*    <PieChart series={*/}
                {/*        [*/}
                {/*            {*/}
                {/*                data: pieChartData,*/}
                {/*                arcLabel: (item) => `${item.label} (${item.value})`,*/}
                {/*                arcLabelMinAngle: 45,*/}


                {/*            },*/}

                {/*        ]*/}
                {/*    }*/}
                {/*              width={500}*/}
                {/*              height={300}*/}
                {/*              // sx={{*/}
                {/*              //     [`& .${pieArcLabelClasses.root}`]: {*/}
                {/*              //         fill: 'white',*/}
                {/*              //         fontWeight: 'bold',*/}
                {/*              //     },*/}
                {/*              // }}*/}
                {/*    />*/}

                {/*</DashboardPanel>*/}
                <DashboardPanel title={'Inventory Out'}>
                    <Box sx={{
                        maxHeight:'300px',
                        display:'flex',
                        width:'100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        {Object.entries(data.inventoryItemOut).map(([k,v] )=> {
                            return <Typography paragraph fontSize={'1.2rem'}>{k}: {v}</Typography>
                        })}
                    </Box>
                </DashboardPanel>
                <DashboardPanel title={"Total Sales"}>
                    <Box sx={{
                        display:'flex',
                        width:'100%',
                        height:'100%',
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Typography variant={'h5'}fontSize='5rem'>
                            RM{data.revenue}
                        </Typography>

                    </Box>
                </DashboardPanel>

            </Box>
        </Box>

    )
}

