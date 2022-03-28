import {AppBar,Toolbar,Typography, IconButton } from '@material-ui/core'
import { ShoppingBasket } from '@mui/icons-material'

export default function Header(){
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant='h6'
                    style={{flexGrow: 1}}
                >
                    MUI shop
                </Typography>
                <IconButton
                    color="inherit"
                    
                >
                    <ShoppingBasket/> 
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}