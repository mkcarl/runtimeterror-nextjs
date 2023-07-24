import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import Link from "@mui/material/Link";
import AuthContext from "@/contexts/AuthContext";
import Copyright from "@/components/Copyright";
import {useRouter} from "next/router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);
    const router = useRouter();

    const handleOnTextboxChange = (e) => {
        if (e.target.id === 'email-textbox') {
            setEmail(e.target.value)
        }
        if (e.target.id === 'password-textbox') {
            setPassword(e.target.value)
        }
    }

    const handleOnSignupClicked = () => {
        authContext.login(email, password)
        router.push("/home")
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    width: '100vw',
                    height: '100vh',
                    p: 4,
                    gap: 2
                }}
            >
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant={'h1'} sx={{
                    fontSize: '2rem'
                }}>
                    Sign in
                </Typography>
                <TextField id={'email-textbox'} variant={"outlined"} label={"Email address*"} type={'email'}
                           onKeyUp={handleOnTextboxChange}/>
                <TextField id={'password-textbox'} variant={"outlined"} label={"Password*"} type={'password'}
                           onKeyUp={handleOnTextboxChange}/>
                <Button variant={'contained'} color={'primary'} onClick={handleOnSignupClicked}>Sign in</Button>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                >
                    Copyright © <Link color="inherit" href="">Runtime Terror</Link> 2022.
                </Typography>
                <Copyright/>
            </Box>
        </>
    )
}
