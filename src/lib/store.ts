import { createStore } from 'zustand'
import { CharacterSheetSlice, createCharacterSheetSlice } from './slices/characterSheetSlice'
import { createProgressSlice, ProgressSlice } from './slices/progressSlice'

type StoreType = CharacterSheetSlice & ProgressSlice;

export const useAppStore = createStore<StoreType>()((...a) => ({
    ...createCharacterSheetSlice(...a),
    ...createProgressSlice(...a)
}))