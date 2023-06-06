'use client'
import { create } from 'zustand'
import { CharacterSheetSlice, createCharacterSheetSlice } from './slices/characterSheetSlice'
import { createProgressSlice, ProgressSlice } from './slices/progressSlice'
import {createJSONStorage, persist} from "zustand/middleware"

export type StoreType = CharacterSheetSlice & ProgressSlice;

export const useCharacterSheetStore = create<CharacterSheetSlice>()(persist((...a) => ({
    ...createCharacterSheetSlice(...a),
}),
{
    name: 'character-sheet-store',
    storage: createJSONStorage(() => sessionStorage)
}));

export const useProgressStore = create<ProgressSlice>()(persist((...a) => ({
    ...createProgressSlice(...a),
}),
{
    name: 'progress-store',
    storage: createJSONStorage(() => sessionStorage)
}))