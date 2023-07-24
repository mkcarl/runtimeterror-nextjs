import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

export default function Index(){
    const router = useRouter()

    const handleOnStart = () => {
        router.push('/login')
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width:'100vw'
        }}>
            <Typography variant={'h2'}>RuntimeTerror - Dell Hack2Hire 2022</Typography>
            <Button variant={'contained'} sx={{fontSize:"1.5rem"}} onClick={handleOnStart}>Let's get started</Button>
        </Box>
    )
}
