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

class Dashboard extends Component {
    state = {
        users: [
            {
                email: 'pippo@pippi.com'
            },
            {
                email: 'topolino@pippi.com'
            }
        ]
    };

    render() {
        const {users} = this.state;
        return (
            <DefaultLayout>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={10}>
                        <Typography variant={'title'}>Utenti</Typography>
                    </Grid>
                    <Grid xs={10} item>
                        <List>
                            {users.map(
                                ({email}, index) =>
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <MailIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={email}/>
                                        </ListItem>
                                        {users.length - 1 !== index && <Divider/>}
                                    </React.Fragment>
                            )}
                        </List>
                    </Grid>
                </Grid>
            </DefaultLayout>
        );
    }
}

export default Dashboard;
