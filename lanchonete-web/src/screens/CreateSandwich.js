import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateSandwich extends Component {
    render() {
        return (
            <div>
                Cria seu lanche como quiser
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(CreateSandwich);