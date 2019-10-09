import BaseAPI from "./BaseAPI";

class API extends BaseAPI {
    async getAllCategory() {
        const res = await this.apiCall({
            url: 'categories',
            method: 'GET'
        });
        return res;
    }

    async getAllProduct() {
        const res = await this.apiCall({
            url: 'products',
            method: 'GET'
        });
        return res;
    }

    async getDetailProduct(id) {
        const res = await this.apiCall({
            url: `products/${id}`,
            method: 'GET'
        });
        return res;
    }

    async getDetailCategory(id) {
        const res = await this.apiCall({
            url: `products/${id}/category`,
            method: 'GET'
        });
        return res;
    }

    // async CreateCategory(param) {
    //     const res = await this.apiCall({
    //         url: 'categories/create',
    //         method: 'POST',
    //         params: param
    //     });
    //     debugger;
    //     return res;
    // }
}

export default new API();
