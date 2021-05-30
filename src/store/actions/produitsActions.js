export const getProduits = () => {
    return {
        type:'GET_PRODUITS'
    }
}

export const addProduits = (produit) => {
    return {
        type:'ADD_PRODUITS',
        payload: produit
    }
}

export const deleteProduits = (id) => {
    return {
        type:'DELETE_PRODUIT',
        payload: id
    }
}