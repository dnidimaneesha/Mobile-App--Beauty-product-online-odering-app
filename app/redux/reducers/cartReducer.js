let defaultState = {
  selectedItems: {items: [], ShopName: ''},
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};

      if (action.payload.checkboxValue) {
        console.log('ADD TO CART');

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          ShopName: action.payload.ShopName,
        };
      } 
    }
  }
};

export default cartReducer;
