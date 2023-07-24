import HomeDrawerContainer from "@/components/HomeDrawerContainer";
import Button from "@mui/material/Button";
import {useContext} from "react";
import AuthContext from "@/contexts/AuthContext";
import {useRouter} from "next/router";
import {Dashboard, Folder, RequestQuote} from "@mui/icons-material";
import Lipsum from "@/components/Lipsum";

const dataAnalyst = [
    {
        name: "Dashboard",
        icon: <Dashboard />,
        content: <Lipsum/>
    },
    {
        name: "Requests",
        icon: <RequestQuote />,
        content: <Lipsum/>

    },
    {
        name:"Foobar",
        icon: <Folder/>,
        content: <Lipsum/>,

    }
]

export default function Home(){


    return (
        <>
            <HomeDrawerContainer pages={dataAnalyst}>

            </HomeDrawerContainer>
        </>
    )
}
