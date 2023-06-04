import { StateCreator } from "zustand";

export interface ProgressSlice{
    progress: 'info' | 'character_sheet' | 'character_details' | 'finished';
    setProgress: (progress: 'info' | 'character_sheet' | 'character_details' | 'finished') => void;
}

export const createProgressSlice: StateCreator<ProgressSlice> = (set) => ({
    progress: 'info',
    setProgress: (progress: 'info' | 'character_sheet' | 'character_details' | 'finished') => {
        set({progress})
    }
})