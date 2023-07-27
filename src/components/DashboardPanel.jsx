import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DashboardPanel(props) {

    return (
        <Box sx={{
            m: 1,
            display:'flex',
            flex:1
        }}>
            <Paper elevation={6} sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: 4,
                py: 2,
            }}>
                <Typography variant={'h2'} fontSize={'1.2rem'} fontWeight={'bold'}>{props.title}</Typography>
                <Box sx={{flexGrow: 1, width: "100%"}}>
                    {props.children}
                </Box>
            </Paper>

        </Box>

    )
}
