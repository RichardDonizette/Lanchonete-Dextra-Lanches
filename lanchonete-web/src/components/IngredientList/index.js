import React from 'react';
import { connect } from 'react-redux';
import { addIngrediente, removeIngrediente } from '../../actions/index'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const addIngredients = (ingrediente, props) => {
    props.dispatch(addIngrediente(ingrediente.Name, 0.0));
}

const removeIngredients = (ingrediente, props) => {
    let { ingredientsList } = props
    let ingredientIndex = null;
    ingredientsList.some((element, index) => {
        if (element === ingrediente.Name) {
            ingredientIndex = index;
            return true
        }
        return false
    })
    if (ingredientIndex != null) {
        props.dispatch(removeIngrediente(ingredientIndex));
    }
}

const IngredientList = (props) => (
    <List>
        {
            props.ingrediente.map((element, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemText primary={element.Name} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => removeIngredients(element, props)} aria-label="Comments">
                                <Icon >remove_circle</Icon>
                            </IconButton>
                            <IconButton onClick={() => addIngredients(element, props)} aria-label="Comments">
                                <Icon >add_circle</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })
        }
    </List>
)
const mapStateToProps = (state) => ({
    ingrediente: state.menu.ingrediente,
    ingredientsList: state.selectSandwich.sandwichCostumize.ingredients,
    sandwichCostumize: state.selectSandwich.sandwichCostumize,
    costumizePrice: state.selectSandwich.costumizePrice,
});
export default connect(mapStateToProps)(IngredientList);