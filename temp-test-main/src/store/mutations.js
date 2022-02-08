import axios from "axios";
import { filter } from "vue/types/umd";
import state from "./state";

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product;
}

export const ADD_TO_CART = ( STATE,  { product, quantity }) => {

let productINcart = state.cart.find(item => {
    return item.product.id === product.id;
});

if (productINcart) {
    productINcart.quantity += quantity;
    return;
}

    state.cart.push({
        product,
        quantity
    })
}

export const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
}

export const CLEAR_CART_ITEMS = (state) => {
    state.cart = [];
}