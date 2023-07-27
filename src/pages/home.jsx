import HomeDrawerContainer from "@/components/HomeDrawerContainer";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import AuthContext from "@/contexts/AuthContext";
import {useRouter} from "next/router";
import {Dashboard, Folder, Inventory, PostAdd, Report, RequestQuote} from "@mui/icons-material";
import Lipsum from "@/components/Lipsum";
import {useCollectionDataOnce} from 'react-firebase-hooks/firestore'
import {collection, getFirestore, query, where} from "firebase/firestore"
import {firebaseApp, getFirebaseAuth} from "@/lib/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import InventoryView from "@/components/InventoryView";
import OrderView from "@/components/OrderView";
import RequestView from "@/components/RequestView";
import DashboardView from "@/components/DashboardView";

const dataAnalyst = [
    {
        name: "Dashboard",
        icon: <Dashboard/>,
        content: <DashboardView/>
    },
    {
        name: "Requests",
        icon: <RequestQuote/>,
        content: <RequestView/>

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
        content: <InventoryView/>
    },
    {
        name: "Orders",
        icon: <PostAdd/>,
        content: <OrderView/>
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
    const [role, setRole] = useState()
    const [value, loading, error] = useCollectionDataOnce(query(collection(getFirestore(), 'persons'), where('uid', '==', user?.uid ?? '')))

    useEffect(() => {
        if (!user) {
            router.push("/login")
            setContent(null)
        }
    }, [user]);

    useEffect(() => {
        console.log('snapshot', value)
        setRole(value?.[0]?.role)

    }, [value]);

    useEffect(() => {
        const role_view_mapping = {
            'data-analyst': dataAnalyst,
            'inventory-manager': inventoryManager,
            'owner': owner
        }
        setContent(<HomeDrawerContainer pages={role_view_mapping[role] ?? []}/>)
    }, [role]);

    return (
        <>
            {content}
        </>
    )
}
