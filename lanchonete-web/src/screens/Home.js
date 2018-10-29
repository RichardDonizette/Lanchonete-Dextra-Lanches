import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { fetchData } from '../actions/index'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Dextra Lanches
                         </Typography>
                    </Toolbar>
                </AppBar>

                <Card style={{ width: '100%' }}>
                    <CardContent>
                        <Typography variant="display1" style={{ fontWeight: "bold", textAlign: "center" }}>
                            <span> Bem vindo!</span>
                            <br />
                            <span >Escolha a sua opção de pedido!</span>
                        </Typography>
                        <Grid container spacing={24} style={{ justifyContent: "center" }}>
                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                <Card onClick={() => this.props.dispatch(push('/selectSandwish'))}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            <span style={{ color: "#f50057", fontWeight: "bold" }}>Escolha seu delicioso sanduíche!</span>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={3} style={{ textAlign: "center" }}>
                                <Card onClick={() => this.props.dispatch(push('/createSandwish'))}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            <span style={{ color: "#f50057", fontWeight: "bold" }}>Monte seu delicioso sanduíche!</span>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Home);