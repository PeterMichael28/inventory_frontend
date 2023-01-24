import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import productReducer from "./features/product/productSlice.js";
import filterReducer from "./features/product/filterSlice.js";


export const store = configureStore( {
    reducer: {
        auth: authReducer,
        product: productReducer,
        filter: filterReducer
    }
})

