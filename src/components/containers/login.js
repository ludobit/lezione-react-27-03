import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {ENDPOINT_API} from '../../constants';
import Snackbar from '@material-ui/core/Snackbar';

class Login extends Component {
    state = {
        username: '',
        password: '',
        loading: false,
        error: false,
        errorMsg: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleClose = () => {
        this.setState({error: false});
    };

    submit = async () => {
        this.setState({loading: true});
        const res = await fetch(`${ENDPOINT_API}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        });
        const responseBody = await res.json();
        if (res.status !== 200) {
            this.setState({loading: false, error: true, errorMsg: responseBody.message});
        } else {
            this.setState({loading: false});
            localStorage.setItem('USER', JSON.stringify(responseBody));
            this.props.history.push(`/dashboard`);
        }
    };

    render() {
        const {loading, password, username, error, errorMsg} = this.state;
        return (
            <React.Fragment>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={10}>
                        <Grid container direction={'column'} justify={'center'}
                              spacing={32} style={{height: '100vh'}}>
                            <Grid item>
                                <Grid container direction={'column'} alignItems={'center'}>
                                    <Typography variant={'display1'} align={'center'}>Login</Typography>
                                    <TextField
                                        id="login-username"
                                        label="Username"
                                        value={username}
                                        onChange={this.handleChange('username')}
                                        margin="normal"/>
                                    <TextField
                                        id="login-password"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={this.handleChange('password')}
                                        margin="normal"/>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction={'row'} justify={'center'}>
                                    <Button variant={'contained'} color={loading ? 'default' : 'primary'}
                                            size={'large'} onClick={this.submit} disabled={!username || !password}>
                                        {!loading && <span>login</span>}
                                        {loading && <CircularProgress size={24}/>}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={error}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{errorMsg}</span>}/>
            </React.Fragment>
        );
    }
}

export default Login;
