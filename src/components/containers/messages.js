import React, {Component} from 'react';
import DefaultLayout from '../hoc/layouts/default';
import {connect} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MessageIcon from '@material-ui/icons/Message';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class MessagesPage extends Component {

    deleteMessage = (index) => {

    };

    render() {
        const {messages} = this.props;
        return (
            <DefaultLayout>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={10}>
                        <Typography variant={'title'}>Messaggi</Typography>
                    </Grid>
                    <Grid xs={10} item>

                        <List>
                            {!messages.length &&
                            <ListItem>
                                <ListItemText primary={'Nessun messaggio'}/>
                            </ListItem>}
                            {messages.map(
                                (message, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <MessageIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={`#${index} ${message}`}/>
                                                <ListItemSecondaryAction>
                                                    <IconButton onClick={this.deleteMessage}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            {messages.length - 1 !== index && <Divider/>}
                                        </React.Fragment>
                                    );
                                }
                            )}
                        </List>
                    </Grid>
                </Grid>
            </DefaultLayout>
        );
    }
}

const leggiMessaggi = (state) => {
    const {messages} = state.messages;
    return {
        messages
    };
};

export default connect(leggiMessaggi)(MessagesPage);
