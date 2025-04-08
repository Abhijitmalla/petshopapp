const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const isAvailable = state.find((item) => item.title === action.payload.title);
            if (isAvailable) {
                isAvailable.quantity += 1; 
            } else {
                state.push({ ...action.payload, quantity: 1 }); 
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.title !== action.payload.title);
        },
        incrementQuantity: (state, action) => {
            const isAvailable = state.find((item) => item.title === action.payload.title);
            if (isAvailable) {
                isAvailable.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const isAvailable = state.find((item) => item.title === action.payload.title);
            if (isAvailable && isAvailable.quantity > 1) {
                isAvailable.quantity -= 1;
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
