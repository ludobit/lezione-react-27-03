import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {LOGOUT_ACTION} from '../../store/actions/user.actions';
import {connect} from 'react-redux';

class AppHeader extends Component {
    state = {
        isDrawerOpen: false
    };

    logout = () => {
        this.props.dispatch(LOGOUT_ACTION());
    };

    render() {
        return (
            <React.Fragment>
                <AppBar position="static" color={'default'}>
                    <Toolbar>
                        <Grid container justify={'flex-end'}>
                            <Button color={'secondary'} onClick={this.logout}>logout</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default connect()(AppHeader);
