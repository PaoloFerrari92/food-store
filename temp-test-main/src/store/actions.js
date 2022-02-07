import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json')
    .then(response => {
        commit('SET_PRODUCTS', response.data);
    })
}