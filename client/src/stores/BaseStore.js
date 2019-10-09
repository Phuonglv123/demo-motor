import {decorate, action, observable, autorun} from "mobx";
import API from "../services/API";

class BaseStore {
    loading = false;
    error = null;

    AllCategory = [];

    AllProduct = [];

    DetailProduct = [];
    DetailCategory = [];

    async getAllCategoryStore() {
        this.loading = true;
        autorun(async () => {
            return await API.getAllCategory()
                .then(res => {
                    this.AllCategory = res;
                })
                .catch(e => {
                    this.error = e;
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
                    this.error = e;
                })
        })
    }

    async getDetailCategory(id) {
        this.loading = true;
        autorun(async () => {
            return await API.getDetailCategory(id)
                .then(res => {
                    this.DetailCategory = res;
                })
                .catch(e => {
                    this.error = e
                })
        })
    }

    async getDetailProduct(id) {
        this.loading = true;
        autorun(async () => {
            return await API.getDetailProduct(id)
                .then(res => {
                    this.DetailProduct = res;
                })
                .catch(e => {
                    this.error = e;
                })
        })
    }

}

decorate(BaseStore, {
    loading: observable,
    error: observable,
    AllCategory: observable,
    getAllCategoryStore: action,
    AllProduct: observable,
    DetailProduct: observable,
    DetailCategory: observable,
    getDetailProduct: action,
});

export default new BaseStore();
