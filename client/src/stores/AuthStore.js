import {decorate, action, observable} from "mobx";
import Auth from "../services/Auth";

class AuthStore {
    loading = false;
    error = null;

    user = {
        email: '',
        password: '',
    };

    setUsername(email) {
        this.user.email = email;
    }

    setPassword(password) {
        this.user.password = password;
    }

    async login({email, password}) {
        this.loading = true;
        this.error = undefined;
        return await Auth.login({email, password})
            .then(res => {
                Auth.saveUser(res.token);
            })
            .catch(error => {
                console.log(error)
            })

    }
}

decorate(AuthStore, {
    setUsername: action,
    setPassword: action,
    login: action,
    loading: observable,
    error: observable,
    user: observable,
});

export default new AuthStore();
