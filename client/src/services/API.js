import BaseAPI from "./BaseAPI";

class API extends BaseAPI {
    async getAllCategory() {
        const res = await this.apiCall({
            url: 'categories/get-all',
            method: 'GET'
        });
        return res.data;
    }

    async deleteCategoty(id) {
        const res = await this.apiCall({
            url: `categories/delete/${id}`,
            method: 'POST'
        });
        return res;
    }

    async updateCategory(id) {
        const res = await this.apiCall({
            url: `categories/update/${id}`,
            method: 'POST'
        });
        return res;
    }

    async CreateSubCat() {
        const res = await this.apiCall({
            url: 'subCategories/create',
            method: 'POST'
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

    async CreateProducts(params) {
        const res = await this.apiCall({
            url: 'products/create',
            method: 'POST',
            params: params
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

    //top Product

    async ListTopProduct() {
        const res = await this.apiCall({
            url: 'top-products/get-all',
            method: 'GET'
        });
        return res;
    }

    async ListCenterProduct() {
        const res = await this.apiCall({
            url: 'center-products/get-all',
            method: 'GET'
        });
        return res;
    }

    async ListBottomProduct() {
        const res = await this.apiCall({
            url: 'bottom-products/get-all',
            method: 'GET'
        });
        return res;
    }
}

export default new API();
