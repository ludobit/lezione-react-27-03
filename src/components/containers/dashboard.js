import React, {Component} from 'react';
import DefaultLayout from '../hoc/layouts/default';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import {GET_USERS_ACTION} from '../../store/actions/user.actions';

class DashboardPage extends Component {
    render() {
        const {users = [], loading} = this.props;
        return (
            <DefaultLayout>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={10}>
                        <Typography variant={'title'}>Utenti</Typography>
                    </Grid>
                    <Grid xs={10} item>
                        {loading &&
                        <Grid container justify={'center'} style={{marginTop: '35px'}}>
                            <CircularProgress size={24}/>
                        </Grid>}
                        {!loading &&
                        <List>
                            {!users.length &&
                            <ListItem>
                                <ListItemText primary={'Nessun utente'}/>
                            </ListItem>}
                            {users.map(
                                ({username}, index) =>
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <MailIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={username}/>
                                        </ListItem>
                                        {users.length - 1 !== index && <Divider/>}
                                    </React.Fragment>
                            )}
                        </List>}
                    </Grid>
                </Grid>
            </DefaultLayout>
        );
    }

    componentDidMount() {
        this.props.dispatch(GET_USERS_ACTION());
    }
}

const mapStateToProps = (state) => {
    const {loading, users} = state.users;
    return {
        loading,
        users
    };
};

export default connect(mapStateToProps)(DashboardPage);
