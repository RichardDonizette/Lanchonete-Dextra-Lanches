import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import xBaconImg from '../../src/assets/img/x-bacon.png'

class SelectSandwich extends Component {
    render() {
        const { sandwich, ingrediente } = this.props;
        return (
            
            sandwich.map((s, index) => {
                console.log(s);
                    return (

                        <Card key={index} style={{ height: 120, borderRadius: 10, marginTop: 10 }}>
                            <div className={"container"}>
                                <img src={xBaconImg} alt="Avatar" className={"image"} style={{ width: 120, height: 120, borderRadius: 10 }} />
                                <div className={"middle"}>
                                    <Button onClick={() => console.log("Customizar")} style={{ margin: 10 }} variant="contained" color="primary">
                                        Customizar
                                </Button>
                                    <Button onClick={() => console.log("Adicionar")} className={"text"} variant="contained" color="secondary">
                                        Adicionar ao carrinho
                                 </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })

            
        )
    }
}
const mapStateToProps = (state) => ({
    sandwich: state.menu.sandwich,
    ingrediente: state.menu.ingrediente

});

export default connect(mapStateToProps)(SelectSandwich);