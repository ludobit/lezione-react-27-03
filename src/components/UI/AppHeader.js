import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from './AppDrawer';

class AppHeader extends Component {
    state = {
        isDrawerOpen: false
    };

    toggleDrawer = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    };

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                    </Toolbar>
                </AppBar>
                {/*<AppDrawer open={this.state.isDrawerOpen} handleClose={this.toggleDrawer}/>*/}
            </React.Fragment>
        );
    }
}

export default AppHeader;
