import React from 'react';
import { connect } from 'react-redux';
import style from './style.css'
import { selectSandwich, sandwichCostumize, addSandwichCart } from '../../actions/index'
import { calculePriceBySandwich } from '../../util/cartCalculation'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import xBaconImg from '../../assets/img/x-bacon.png'
import xBurguerImg from '../../assets/img/x-burguer.png'
import xEggImg from '../../assets/img/x-egg.png'
import xEggBaconImg from '../../assets/img/x-egg-bacon.png'

const selectImg = (path) => {
    switch (path) {
        case "X-Bacon":
            return xBaconImg
        case "X-Burger":
            return xBurguerImg
        case "X-Egg":
            return xEggImg
        case "X-Egg Bacon":
            return xEggBaconImg
        default:
            break;
    }
}

const sendSandwichCart = (props) => {
   props.dispatch(selectSandwich(props.sandwich));
   props.dispatch(addSandwichCart(props.sandwich, calculePriceBySandwich(props.sandwich, props.ingrediente, props.costumizePrice)));
}

const sendCostumizeSandwich = (props) => {
    props.dispatch(sandwichCostumize(props.sandwich, calculePriceBySandwich(props.sandwich, props.ingrediente, props.costumizePrice)));
}

const Sandwich = (props) => (
    <Card style={{ height: 120, borderRadius: 10, marginTop: 10 }}>
        <div className="sandwich-container">
            <img src={selectImg(props.sandwich.Name)} alt="Avatar" className="image" style={{ width: 100, height: 100, borderRadius: 10 }} />
            <div className="description-content">
                <span className="sandwich-name">{props.sandwich.Name}</span>
                <div style={{ marginTop: 5 }}>
                    <span className="sandwich-name">Ingredientes:</span>
                    <p>
                        {props.sandwich.ingredients.join(', ')}
                    </p>
                </div>
            </div>
            <div className="button-meddle">
                <Button onClick={() => sendCostumizeSandwich(props)} style={{ margin: 10 }} variant="contained" color="primary">
                    Customizar
                </Button>
                <Button onClick={() => sendSandwichCart(props)} variant="contained" color="secondary">
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    </Card>
)
const mapStateToProps = (state) => ({
    ingrediente: state.menu.ingrediente,
    costumizePrice: state.selectSandwich.costumizePrice,
});
export default connect(mapStateToProps)(Sandwich);