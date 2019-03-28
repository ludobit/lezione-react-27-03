import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

const AppDrawer = (props) => {
    const {open, handleClose} = props;
    const logout = () => {
    };

    const drawerList = [
        {
            label: <Typography variant={'subtitle1'}>Dashboard</Typography>,
            icon: <DashboardIcon style={{opacity: '.5'}}/>,
            route: '/dashboard'
        }
    ];
    const sideList = (
        <div>
            <Grid container
                  direction={'column'}
                  justify={'center'}>
                <Grid item>
                    <Grid container justify="center">
                        <img style={{height: '100px', margin: '25px'}} src="/logo.svg" alt=""/>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <List>
                {drawerList.map((item, index) => (
                    <ListItem button key={index} component={RouterLink} to={item.route}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <ListItem button component={RouterLink} to={'/'}>
                    <ListItemIcon><ExitToAppIcon style={{opacity: '.5'}}/></ListItemIcon>
                    <ListItemText
                        onClick={logout}
                        primary={<Typography variant={'subtitle1'}>Logout</Typography>}/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <nav>
            <Drawer open={open} onClose={handleClose} variant={'permanent'}>
                <div tabIndex={0}>
                    {sideList}
                </div>
            </Drawer>
        </nav>
    );
};

export default AppDrawer;
