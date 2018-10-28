import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index'

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    render() {
        return (
            <h1>Olá</h1>
        )
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Home);