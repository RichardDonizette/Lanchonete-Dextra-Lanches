import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { fetchData } from '../actions/index'
import Header from '../components/Header'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    render() {
        return (
            <div className="home-content">
                <Header description={'Dextra Lanches'} />
                    <Typography variant="display1" style={{ fontWeight: "bold", textAlign: "center" }}>
                        <span> Bem vindo!</span>
                        <br />
                        <span >Qual será seu pedido?</span>
                    </Typography>
                <div>
                    <Grid container spacing={0} style={{ justifyContent: "center" }}>
                        <Grid item xs={3} style={{ textAlign: "center" }}>
                            <Card onClick={() => this.props.dispatch(push('/selectSandwish'))}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        <span style={{ color: "#f50057", fontWeight: "bold" }}>Escolha seu sanduíche!</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} style={{ textAlign: "center" }}>
                            <Card onClick={() => this.props.dispatch(push('/createSandwish'))}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        <span style={{ color: "#f50057", fontWeight: "bold" }}>Monte seu sanduíche!</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Home);