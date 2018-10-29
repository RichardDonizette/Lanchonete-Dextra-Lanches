import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header'

class CreateSandwich extends Component {
    render() {
        return (
            <div>
                <Header description={'Monte seu sanduíche como quiser'} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(CreateSandwich);