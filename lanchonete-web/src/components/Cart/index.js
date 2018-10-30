import React from 'react';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons//Remove';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Cart = (props) => (
    <div>
        <Badge color="secondary" badgeContent={5} style={{ position: "fixed", bottom: 20, right: 20 }} >
            <Button onClick={() => { }} variant="fab" color="primary" aria-label="add" >
                <ShoppingCartIcon />
            </Button>
        </Badge>
        <Dialog
            fullScreen
            open={false}
            onClose={() => { }}
        >
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={() => { }} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" >
                        Meu carrinho
              </Typography>
                </Toolbar>
            </AppBar>
            <List style={{ maxHeight: 508, overflowY: "scroll", marginTop: document.getElementById("appBar") ? (document.getElementById("appBar").clientHeight + 10) + "px" : "80px" }}>

                <ListItem button>
                    <ListItemText primary={`kkk`} secondary={'kkkkkk'} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => { }} style={{ color: "red" }} aria-label="Remover item">
                            <RemoveIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

            </List>

            <Typography style={{ position: "absolute", bottom: 25, right: 25 }} variant="headline" >
                <span style={{ color: "#f50057" }}>Total: </span>{"2252"}
            </Typography>
        </Dialog>
    </div>
)
export default Cart;