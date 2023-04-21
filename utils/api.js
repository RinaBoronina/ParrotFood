const onResponse = (data) => {
    return data.ok ? data.json() : Promise.reject('Что-то пошло не так');
};

class Api {
    constructor(data) {
        this.baseUrl = data.baseUrl;
        this.headers = data.headers;
    }

    getProductList() {
        return fetch(`${this.baseUrl}/products`, {
            method: 'GET',
            headers: this.headers,
        }).then(onResponse);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers,
        }).then(onResponse);
    }

    searchProducts(path) {
        return fetch(`${this.baseUrl}/products/search?query=${path}`, {
            headers: this.headers,
        }).then(onResponse);
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'Content-Type': 'application/json',
        authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmYjgyNDMyOTFkNzkwYjNmM2IzMDkiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODk4MjMxLCJleHAiOjE3MTM0MzQyMzF9.Pjg_bXUQkZt9RyGlYZbt_6PXaFLP0Nt11LGaMQG1lQg',
    },
};

export const api = new Api(config);
