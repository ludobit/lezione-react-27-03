import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
    state = {
        error: false
    };

    renderedRoutes = routes.map(
        ({component, name, routePath}) => {
            const DynamicComponent = component;
            return <Route key={name} path={routePath}
                          render={(props) => <DynamicComponent key={name} {...props}/>}/>;

        }
    );

    handleClose = () => {
        this.setState({error: false});
    };

    render() {
        const {alert} = this.props;
        return (
            <React.Fragment>
                <Switch>
                    {this.renderedRoutes}
                    <Redirect to="/"/>
                </Switch>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.error}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{alert.message}</span>}/>
            </React.Fragment>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.alert.message && prevState.error === false) {
            this.setState({error: true});
        }
    }
}

const mapStateToProps = (state) => {
    const {alert} = state;
    return {
        alert
    };
};

export default connect(mapStateToProps)(withRouter(App));
