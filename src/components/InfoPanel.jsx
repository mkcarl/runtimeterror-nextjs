import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import DashboardPanel from "@/components/DashboardPanel";

export default function InfoPanel(props) {

    return (
        <DashboardPanel title={props.title ?? 'Info panel'}>
            <Box>
                <Box sx={{display: 'flex', width: "100%", height: '100%', justifyContent: 'space-around'}}>
                    {
                        Object.entries(props.data).map(([key, value]) => {
                            return (
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2}}>
                                    <Typography variant={'h5'} fontSize={'4rem'}>{value}</Typography>
                                    <Typography variant={'caption'} fontSize={'1.5rem'}>{key}</Typography>
                                </Box>)
                        })
                    }

                </Box>
                {/*<Divider/>*/}
                {/*<Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>*/}
                {/*    <Typography variant={'h5'} fontSize={'3rem'}>Total*/}
                {/*        : {Object.entries(props.data).reduce((prev, [currKey, currVal]) => {*/}
                {/*            if (typeof currVal == 'number')*/}
                {/*                return prev += currVal*/}
                {/*            else return prev*/}
                {/*        }, 0)}</Typography>*/}
                {/*</Box>*/}

            </Box>
        </DashboardPanel>

    )
}
