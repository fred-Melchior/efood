import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalState = {
  itemsModal: Pratos[]
  isModalOpen: boolean
}

const initialState: ModalState = {
  itemsModal: [],
  isModalOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Pratos>) => {
      const prato = state.itemsModal.filter(
        (item) => item.id === action.payload.id
      )
      if (!prato) {
        state.itemsModal.push(action.payload)
      }
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    }
  }
})

export const { closeModal, openModal } = modalSlice.actions

export default modalSlice.reducer
