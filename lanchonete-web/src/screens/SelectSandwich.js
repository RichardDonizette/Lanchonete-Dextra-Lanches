import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Cart from '../components/Cart'
import Sandwich from '../components/Sandwich'
import IngredientList from '../components/IngredientList'
import { selectSandwich, closeSandwichCostumize } from '../actions/index'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';


class SelectSandwich extends Component {

    sendSandwichCart(sandwich) {
        this.props.dispatch(selectSandwich(sandwich));
        this.props.dispatch(closeSandwichCostumize());
    }

    closeCostumize() {
        this.props.dispatch(closeSandwichCostumize());
    }
    render() {
        const { sandwich, selectSandwich } = this.props;
        return (
            <div>
                <Header description={'Escolha seu sanduíche!'} />
                <div style={{ marginBottom: -10 }}>
                    {
                        sandwich.map((s, index) => (
                            < Sandwich key={index} sandwich={s} />
                        ))
                    }
                    <Dialog
                        fullScreen={false}
                        open={this.props.openModal}
                        onClose={() => this.closeCostumize()}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">{`Customize o seu ${selectSandwich.sandwichCostumize.Name}`}</DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                Adicione ou remova ingredientes ao seu sanduíche!
                            </DialogContentText>
                            <Grid container spacing={8} style={{ marginTop: 10, marginBottom: 10 }}>
                                <Grid item xs={6} style={{ textAlign: "left" }}>
                                    <Typography variant="subheading">
                                        Ingredientes:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: "right" }}>
                                    <Typography variant="display1">
                                        "R$0,00"
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "left" }}>
                                    <Typography variant="h6">
                                        {selectSandwich.sandwichCostumize.length === 0 ?
                                            null
                                            :
                                            selectSandwich.sandwichCostumize.ingredients.join(', ')
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} style={{ marginTop: 10 }}>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Escolha os ingredientes
                                    </Typography>
                                    <IngredientList/>
                                </Grid>
                             </Grid>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={() => this.closeCostumize()} color="primary">
                                Cancelar
                            </Button>
                            <Button onClick={() => this.sendSandwichCart(selectSandwich.sandwichCostumize)} color="primary" autoFocus>
                                Adicionar ao carrinho
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Cart />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    sandwich: state.menu.sandwich,
    ingrediente: state.menu.ingrediente,
    openModal: state.selectSandwich.customizeSandwichModal,
    selectSandwich: state.selectSandwich
});

export default connect(mapStateToProps)(SelectSandwich);