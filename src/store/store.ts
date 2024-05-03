import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonService from '../services/PokemonService/pokemonService'

export const store = configureStore({
  reducer: {
    [pokemonService.reducerPath]: pokemonService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonService.middleware),
})
setupListeners(store.dispatch)