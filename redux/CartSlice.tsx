const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, actions) => {
            const isAvailable = state.find((item) => item.name === actions.payload.name);
            if (isAvailable) {
                isAvailable.quantity += 1; 
            } else {
                state.push({ ...actions.payload, quantity: 1 }); 
            }
        },
        removeFromCart: (state, actions) => {
            return state.filter((item) => item.name !== actions.payload.name);
        },
        incrementQuantity: (state, actions) => {
            const isAvailable = state.find((value) => value.name == actions.payload.name
        ); 
        if (isAvailable) {
        isAvailable.quantity + 1;   
        }
        else{
            console.log("not Available");
        }
        },
        decrementQuantity: (state, actions) => {
            const isAvailable = state.find((item) => item.name === actions.payload.name);
            if (isAvailable) {
                if (isAvailable.quantity === 1) {
                    isAvailable.quantity = 1; // Keep it at 1, or maybe remove it?
                } else {
                    isAvailable.quantity -= 1;
                }
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
