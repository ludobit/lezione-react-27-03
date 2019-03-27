import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
    renderedRoutes = routes.map(
        ({component, name, routePath}) => {
            const DynamicComponent = component;
            return <Route key={name} path={routePath}
                          render={(props) => <DynamicComponent key={name} {...props}/>}/>;

        }
    );

    render() {
        return (
            <div className="App">
                <Switch>
                    {this.renderedRoutes}
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
