// import '@/styles/globals.css'
import {AuthProvider} from "@/contexts/AuthContext";
import {CssBaseline} from "@mui/material";

export default function App({Component, pageProps}) {
    return <AuthProvider>
        <CssBaseline/>
        <Component {...pageProps} />

    </AuthProvider>
}
