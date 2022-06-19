/**
 * Store de nuestra aplicación
 */
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  })
})

export default store