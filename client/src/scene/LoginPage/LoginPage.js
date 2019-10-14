import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

class LoginPage extends Component {
    handleEmailChange = e => this.props.AuthStore.setUsername(e.target.value);
    handlePasswordChange = e => this.props.AuthStore.setPassword(e.target.value);
    handleSubmitForm = (e) => {
        e.preventDefault();
        const {email, password} = this.props.AuthStore.user;
        this.props.AuthStore.login({email, password})
            .then(() => {
                this.props.history.push('/admin');
            });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 login-form mx-auto'>
                        <h3>Login to example react mobx</h3>
                        <form className='mt-5' onSubmit={this.handleSubmitForm}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='email'
                                    className='form-control'
                                    placeholder='Your email'
                                    // value={username}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='password'
                                    className='form-control'
                                    placeholder='Your Username'
                                    // value={password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    className='btn btn-primary btn-block'
                                    value='login'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('AuthStore')(withRouter(observer(LoginPage)))
