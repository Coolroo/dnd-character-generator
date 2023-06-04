import { create } from 'zustand'
import { CharacterSheetSlice, createCharacterSheetSlice } from './slices/characterSheetSlice'
import { createProgressSlice, ProgressSlice } from './slices/progressSlice'

type StoreType = CharacterSheetSlice & ProgressSlice;

export const useAppStore = create<StoreType>()((...a) => ({
    ...createCharacterSheetSlice(...a),
    ...createProgressSlice(...a)
}))