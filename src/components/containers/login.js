import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {LOGIN_ACTION} from '../../store/actions/user.actions';
import {history} from '../../helpers/history.helper';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    submit = async (ev) => {
        ev.preventDefault();
        const {dispatch} = this.props;
        const {username, password} = this.state;
        dispatch(LOGIN_ACTION(username, password));
    };

    render() {
        const {password, username} = this.state;
        const {loading} = this.props;
        return (
            <form onSubmit={this.submit}>
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
                                            size={'large'} disabled={!username || !password} type={'submit'}>
                                        {!loading && <span>login</span>}
                                        {loading && <CircularProgress size={24}/>}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }

    componentDidMount() {
        if (this.props.user) {
            history.push('/dashboard');
        }
    }
}

const mapStateToProps = (state) => {
    const {loading, user} = state.authentication;
    return {
        loading,
        user
    };
};

export default connect(mapStateToProps)(LoginPage);
