import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import burgerImg from '../../src/assets/img/x-bacon.png';

import Header from '../components/Header';
import IngredientList from '../components/IngredientList';
import Cart from '../components/Cart'

import { addSandwichCart } from '../actions/index';
import { calculePriceBySandwich } from '../util/cartCalculation'

class CreateSandwich extends Component {
    sendSandwichCart(sandwich) {
        let xCostumizado = {
            Name: 'X Cliente',
            ingredients: sandwich.ingredients
        }
        this.props.dispatch(addSandwichCart(xCostumizado, calculePriceBySandwich(sandwich, this.props.ingrediente)));
    }

    render() {
        const { selectSandwich } = this.props;
        return (
            <div>
                <Header description={'Monte seu sanduíche como quiser'} />
                <Card>
                    <CardContent>
                        <Typography variant="display1" style={{ fontWeight: 200 }}>
                            Monte seu sanduíche!
                        </Typography>
                        <Grid container spacing={8} style={{ marginTop: 10, marginBottom: 10 }}>
                            <Grid item xs={12} style={{ textAlign: "left" }}>
                                <Typography variant="subheading">
                                    Seu sanduíche
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <div style={{ textAlign: "left", width: "100%" }}>
                                    <Button color="secondary" onClick={() => { }} style={{ "border": "1px #d2d2d2 solid", "width": "70px", "height": "70px", borderRadius: 4, marginRight: 10, marginBottom: 10 }} >
                                        <img src={burgerImg} alt="Avatar" className={"image"} style={{ width: '200%', height: '200%', borderRadius: 10 }} />
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} style={{ marginTop: 10, marginBottom: 10 }}>
                            <Grid item xs={6} style={{ textAlign: "left" }}>
                                <Typography variant="subheading">
                                    Ingredientes:
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: "right" }}>
                                <Typography variant="display1">
                                    R$ {calculePriceBySandwich(selectSandwich.sandwichCostumize, this.props.ingrediente).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
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
                        <Divider />
                        <Grid container spacing={8} style={{ marginTop: 10 }}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Escolha os ingredientes
                                    </Typography>
                                <IngredientList />
                            </Grid>
                        </Grid>
                        <Divider />
                        <Button color="secondary" disabled={selectSandwich.sandwichCostumize.ingredients.length === 0 ? true : false} onClick={() => this.sendSandwichCart(selectSandwich.sandwichCostumize)} variant="contained" style={{ marginTop: 10 }} >
                            {"Adicionar ao carrinho este sanduíche"}
                        </Button>
                    </CardContent>
                </Card>
                <Cart />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    sandwich: state.menu.sandwich,
    ingrediente: state.menu.ingrediente,
    selectSandwich: state.selectSandwich
});

export default connect(mapStateToProps)(CreateSandwich);