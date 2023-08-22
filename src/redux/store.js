import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [  
        
    ],
    total:0,
    
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
addToCart(state,action) {
const newItems = {
    title:action.payload.title,
    price:action.payload.price,
    description : action.payload.description,
    id:action.payload.id,
    images : action.payload.images,
    amount : action.payload.amount
}
const existingItem = state.cart.find((item)=> item.id === action.payload.id)
if(!existingItem){
state.cart = [...state.cart,newItems]

}
},
increaseItem(state,action) {
    const eachItem = state.cart.find((item)=> item.id === action.payload.id)
    if(eachItem) {
        eachItem.amount ++
    }
     if(eachItem.amount > 10) {
eachItem.amount = 10
    }
},
decreaseItem(state,action) {
    const eachItem = state.cart.find((item)=> item.id === action.payload.id)
    if(eachItem) {
        eachItem.amount--
    }
     if(eachItem.amount < 1) {
        eachItem.amount = 1
            }
},
calculateTotal(state,action) {
    const totalPrice = state.cart.reduce((totalamount, item)=> {
        return totalamount + (item.amount * item.price)
    },0)

    state.total = totalPrice
},
removeItem(state, action) {
    state.cart = state.cart.filter(val=> val.id !== action.payload.id)
}

    }
})
export const userActions = cartSlice.actions
export const store = configureStore({
    reducer : cartSlice.reducer
})