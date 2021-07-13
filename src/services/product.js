import axios from 'axios';
import { v4 as uuid_v4 } from "uuid";

const extractLastPage = (link, page) => {
    const urlLastPage = (page === 1) ? link.split(',')[2] : link.split(',')[3]

    return Number(urlLastPage.substring(
        urlLastPage.lastIndexOf("page=") + 1,
        urlLastPage.lastIndexOf('>;')
    ).split("=")[1]);
}

export const startGetProducts = async (page = 1) => {
    try {
        const { headers: { link }, data } = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/productos?_page=${page}`);
        const lastPage = extractLastPage(link, page)
        return {
            data,
            lastPage
        }
    } catch (error) {
        console.error(error)
    }
}

export const getTotalProducts = (productsLocalStorage) => productsLocalStorage.reduce((acc, product) => acc + (product.valor_oferta_plano * product.cantidad), 0)

export const startPostOrder = async ({ name, email, phone }) => {
    try {
        const productsLocalStorage = JSON.parse(localStorage.getItem('products'))
        const total = getTotalProducts(productsLocalStorage)

        const { data } = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/pedidos`, {
            id: uuid_v4(),
            nombre: name,
            email,
            telefono: phone,
            total,
            productos: productsLocalStorage
        });

        localStorage.removeItem('products')

        return data;

    } catch (error) {
        console.error(error);
    }
}