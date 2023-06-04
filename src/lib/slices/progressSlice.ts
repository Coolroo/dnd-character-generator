import { ProgressBarStep } from "@/types";
import { StateCreator } from "zustand";

export interface ProgressSlice{
    progress: ProgressBarStep[];
    setProgress: (progress: ProgressBarStep[]) => void;
}

const defaultValue: ProgressBarStep[] = [
    {
        id: 1,
        name: 'Info',
        href: '/info',
        status: 'current'
    },
    {
        id: 2,
        name: 'Character Sheet',
        href: '/character-sheet',
        status: 'upcoming'
    },
    {
        id: 3,
        name: 'Character Details',
        href: '/character-details',
        status: 'upcoming'
    },
    {
        id: 4,
        name: 'Finished',
        href: '/finished',
        status: 'upcoming'
    }

]
export const createProgressSlice: StateCreator<ProgressSlice> = (set) => ({
    progress: defaultValue,
    setProgress: (progress: ProgressBarStep[]) => {
        set({progress})
    }
})