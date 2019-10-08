import {decorate, action, observable, autorun} from "mobx";
import API from "../services/API";

class BaseStore {
    loading = false;
    error = null;

    AllCategory = [];

    AllProduct = [];

    async getAllCategoryStore() {
        this.loading = true;
        autorun(async () => {
            return await API.getAllCategory()
                .then(res => {
                    this.AllCategory = res;
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }

    async getAllProductStore() {
        this.loading = true;
        autorun(async () => {
            return await API.getAllProduct()
                .then(res => {
                    this.AllProduct = res;
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }

}

decorate(BaseStore, {
    loading: observable,
    error: observable,
    AllCategory: observable,
    getAllCategoryStore: action,
    AllProduct: observable
});

export default new BaseStore();
