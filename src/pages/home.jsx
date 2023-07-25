import HomeDrawerContainer from "@/components/HomeDrawerContainer";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import AuthContext from "@/contexts/AuthContext";
import {useRouter} from "next/router";
import {Dashboard, Folder, Inventory, PostAdd, Report, RequestQuote} from "@mui/icons-material";
import Lipsum from "@/components/Lipsum";
import {use, useCollectionDataOnce, useCollectionOnce} from 'react-firebase-hooks/firestore'
import {collection, getFirestore, getDocs} from "firebase/firestore"
import {firebaseApp, getFirebaseAuth} from "@/lib/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const dataAnalyst = [
    {
        name: "Dashboard",
        icon: <Dashboard/>,
        content: <Lipsum/>
    },
    {
        name: "Requests",
        icon: <RequestQuote/>,
        content: <Lipsum/>

    },
    {
        name: "Foobar",
        icon: <Folder/>,
        content: <Lipsum/>,

    }
]

const inventoryManager = [
    {
        name: "Inventory",
        icon: <Inventory/>,
        content: <Lipsum/>
    },
    {
        name: "Orders",
        icon: <PostAdd/>,
    },
    {
        name: "Report",
        icon: <Report/>,
        content: <Lipsum/>
    }
]

const owner = [
    {
        name: "Dashboard",
        icon: <Dashboard/>,
        content: <Lipsum/>
    },
]


export default function Home() {
    const {user} = useContext(AuthContext)
    const router = useRouter()
    const [content, setContent] = useState()

    useEffect(() => {
        console.log('user',user)
        if (!user) {
            router.push("/login")
            setContent(null)
        } else {
            setContent(<HomeDrawerContainer pages={dataAnalyst}/>)
        }

    }, []);

    return (
        <>
            {content}
        </>
    )
}
