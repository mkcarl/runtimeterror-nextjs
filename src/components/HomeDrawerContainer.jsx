import React, {useContext, useEffect, useState} from "react";
import AuthContext from "@/contexts/AuthContext";
import {useRouter} from "next/router";
import {
    AppBar, Badge,
    Divider,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {LogoutOutlined} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {useSignOut} from "react-firebase-hooks/auth";
import {getFirebaseAuth} from "@/lib/firebase";

const drawerWidth = '12vw';


export default function HomeDrawerContainer(props) {

    // {
    // name : "Foo",
    // icon : <Icon />,
    // onClick : () => {}
    // content : <Component />
    //}
    const [logoutHandler, logoutLoading, logoutError] = useSignOut(getFirebaseAuth())
    const router = useRouter()
    const [content, setContent] = useState()

    useEffect(() => {
        setContent(props.pages[0]?.content)
    }, [props.pages]);

    const handleOnLogout = () => {
        logoutHandler()
        router.push("/login")
    }

    return (
        <Box sx={{display:'flex', height:'100vh'}}>
            <AppBar
                position="fixed"
                sx={{width: `calc(100% - ${drawerWidth})`, ml: `${drawerWidth}`}}
            >
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h6" noWrap component="div">
                        RT Inventory Managment
                    </Typography>
                    <IconButton color="inherit" onClick={handleOnLogout}>
                        <Badge color="secondary">
                            <LogoutOutlined />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar/>
                <Divider/>
                <List>
                    {
                        props.pages.map((page, index) => {
                            const handleOnClick = () => {
                                setContent(page.content)
                            }

                            return (
                                <ListItemButton key={index} onClick={handleOnClick}>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.name}/>
                                </ListItemButton>
                            )
                        })
                    }
                </List>
            </Drawer>
            <Box component={'main'} sx={{flexGrow: 1, bgcolor: 'background.default', p: 3, flexWrap:'warp'}}>
                <Toolbar />
                {content}
            </Box>
        </Box>
    )
}
