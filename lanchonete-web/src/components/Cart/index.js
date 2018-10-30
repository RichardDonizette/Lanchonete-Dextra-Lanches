import React, { Component } from 'react';
import { connect } from 'react-redux';

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


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const { cart } = this.props;
        return (
            <div>
                <Badge color="secondary" badgeContent={cart.sandwich.length} style={{ position: "fixed", bottom: 20, right: 20 }} >
                    <Button onClick={() => this.setState({ open: true })} variant="fab" color="primary" aria-label="add" >
                        <ShoppingCartIcon />
                    </Button>
                </Badge>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={() => { }}
                >
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => this.setState({ open: false })} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" >
                                Meu carrinho
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <List>
                            {
                                cart.sandwich.map((sandwich, index) => {
                                    return (
                                        <ListItem key={index} button>
                                            <ListItemText primary={sandwich.Name} secondary={sandwich.ingredients.join(', ')} />
                                            <ListItemSecondaryAction>
                                                <IconButton onClick={() => { }} style={{ color: "red" }} aria-label="Remover item">
                                                    <RemoveIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </div>
                    <Typography style={{ position: "absolute", bottom: 25, right: 25 }} variant="headline" >
                        <span>Total: R$</span>{cart.totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </Typography>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);