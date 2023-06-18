import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Pratos[]
  isOpen: boolean
  isCart: boolean
  isDelivery: boolean
  isPayment: boolean
  isMessage: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isDelivery: false,
  isPayment: false,
  isCart: false,
  isMessage: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pratos>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este produto já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.isCart = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    openCart: (state) => {
      state.isCart = true
      state.isDelivery = false
      state.isPayment = false
      state.isMessage = false
    },
    closeCart: (state) => {
      state.isCart = false
    },
    openDelivery: (state) => {
      state.isDelivery = true
      state.isCart = false
      state.isPayment = false
      state.isMessage = false
    },
    closeDelivery: (state) => {
      state.isDelivery = false
    },
    openPayment: (state) => {
      state.isPayment = true
      state.isCart = false
      state.isDelivery = false
      state.isMessage = false
    },
    closePayment: (state) => {
      state.isPayment = false
    },
    message: (state) => {
      state.isMessage = true
      state.isCart = false
      state.isDelivery = false
      state.isPayment = false
    },
    closeMessage: (state) => {
      state.isMessage = false
    }
  }
})

export const {
  add,
  close,
  clear,
  closeCart,
  openCart,
  open,
  remove,
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  message,
  closeMessage
} = cartSlice.actions
export default cartSlice.reducer
