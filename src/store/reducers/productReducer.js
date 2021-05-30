
const  initialState = {

    produits: [
        {
            id:1,
            name:'Pc',
            Qte:120,
            prix:450
        }
    ]
};

export default (state = initialState, action) => {
     switch(action.type){
         case 'GET_PRODUITS':
             return {
                 ...state
             }
         case 'ADD_PRODUITS':
             return {
                 ...state,
                 produits: [action.payload, ...state.produits] 
             }
         case 'DELETE_PRODUIT':
             return {
                 ...state,
                 produits: state.produits.filter(produit => produit.id !== action.payload)
             }
         default: {
             return state;
         }
     }
}

