import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filter from './filter/slice'
import cart from './cart/slice'
import product from './product/slice'

export const store = configureStore({
  reducer: {
    product,
    filter,
    cart,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()