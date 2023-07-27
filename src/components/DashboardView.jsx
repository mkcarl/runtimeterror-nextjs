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
import {pieArcLabelClasses, PieChart} from "@mui/x-charts";

export default function DashboardView() {
    const requestData = {
        approve: 10,
        pending: 29,
        rejected: 3
    }
    const orderData = {
        approve: 5,
        pending: 20,
    }
    const inventoryData = {
        // number of items going in and out of inventory
        out: 2000,
        in: 'N/A'
    }
    const pieChartData = [
        {value: 100, label: 'tomato' },
        {value: 150, label: 'carrot' },
        {value: 200, label: 'cabbage' },
    ]
    const totalSalesData=20000

    return (
        <Box sx={{display: 'flex', flexWrap:'wrap'}}>
            <Box id={'first-row'} sx={{display:'flex', width:'100%'}}>
                <InfoPanel id={'request-panel'} title={'Requests'} data={requestData}/>
                <InfoPanel id={'order-panel'} title={'Orders'} data={orderData}/>
                <InfoPanel id={'inventory-panel'} title={'Inventory'} data={inventoryData}/>

            </Box>
            <Box id={'second-row'} sx={{display:'flex', width:'100%'}}>
                <DashboardPanel title={'Out inventory'}>
                    <PieChart series={
                        [
                            {
                                data: pieChartData,
                                arcLabel: (item) => `${item.label} (${item.value})`,
                                arcLabelMinAngle: 45,


                            },

                        ]
                    }
                              width={500}
                              height={300}
                              sx={{
                                  [`& .${pieArcLabelClasses.root}`]: {
                                      fill: 'white',
                                      fontWeight: 'bold',
                                  },
                              }}
                    />

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
                            RM{totalSalesData}
                        </Typography>

                    </Box>
                </DashboardPanel>

            </Box>
        </Box>

    )
}

