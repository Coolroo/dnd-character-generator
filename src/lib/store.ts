'use client'
import { create } from 'zustand'
import { CharacterSheetSlice, createCharacterSheetSlice } from './slices/characterSheetSlice'
import { createProgressSlice, ProgressSlice } from './slices/progressSlice'
import { GenerationSettingsSlice, createGenerationSettingsSlice } from './slices/generationSettingsSlice';

export type StoreType = CharacterSheetSlice & ProgressSlice & GenerationSettingsSlice;

export const useCharacterSheetStore = create<CharacterSheetSlice>()((...a) => ({
    ...createCharacterSheetSlice(...a),
}));

export const useProgressStore = create<ProgressSlice>()((...a) => ({
    ...createProgressSlice(...a),
}))

export const useGenerationSettingsStore = create<GenerationSettingsSlice>()((...a) => ({
    ...createGenerationSettingsSlice(...a),
}))
