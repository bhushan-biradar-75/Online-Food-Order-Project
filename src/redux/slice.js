import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  products:[
    {
      name: "chapati",
      price: 5,
      id: 1,
      quntity: 0,
      Image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    },
    {
      name: "pickle",
      price: 15,
      id: 2,
      quntity: 0,
      Image:
        "https://images.pexels.com/photos/9005955/pexels-photo-9005955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Curd",
      price: 20,
      id: 3,
      quntity: 0,
      Image:
        "https://thumbs.dreamstime.com/b/sour-cream-natural-cottage-cheese-curd-clay-pot-dark-background-traditional-cuajada-yogurt-cream-sour-cream-natural-104325630.jpg",
    },
    {
      name: "Sweet",
      price: 80,
      id: 6,
      quntity: 0,
      Image:
        "https://images.pexels.com/photos/7449105/pexels-photo-7449105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Daal",
      price: 120,
      id: 4,
      quntity: 0,
      Image:
        "https://media.gettyimages.com/photos/dal-fry-in-a-bowl-lemon-wedges-and-onion-rings-picture-id813258134?s=2048x2048",
    },
    {
      name: "Paneer Dish",
      price: 200,
      id: 5,
      quntity: 0,
      Image:
        "https://imagevars.gulfnews.com/2021/08/30/Paneer-Masala-_17b9680cdfb_base.jpg",
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer