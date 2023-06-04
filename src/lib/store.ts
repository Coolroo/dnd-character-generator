import create from 'zustand'
import { CharacterSheetSlice, createCharacterSheetSlice } from './slices/characterSheetSlice'


export const useAppStore = create<CharacterSheetSlice>()((...a) => ({
    ...createCharacterSheetSlice(...a),
}))