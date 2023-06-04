import { ProgressBarStep, pages } from "@/types";
import { StateCreator } from "zustand";

export interface ProgressSlice{
    progress: ProgressBarStep[];
    current_page: pages;
    setProgress: (progress: ProgressBarStep[]) => void;
    setCurrentPage: (page: pages) => void;
}

const defaultValue: ProgressBarStep[] = [
        {
            id: 1,
            name: 'Info',
            href: '/info',
            status: 'complete'
        },
        {
            id: 2,
            name: 'Character Details',
            href: '/character-details',
            status: 'upcoming'
        },
        {
            id: 3,
            name: 'Skills',
            href: '/skills',
            status: 'upcoming'
        },
        {
            id: 4,
            name: 'Equipment',
            href: '/equipment',
            status: 'upcoming'
        },
        {
            id: 5,
            name: 'Review & Finish',
            href: '/review',
            status: 'upcoming'
        }
    ];

export const createProgressSlice: StateCreator<ProgressSlice> = (set) => ({
    progress: defaultValue,
    current_page: 'Info',
    setProgress: (progress: ProgressBarStep[]) => {
        set({progress})
    },
    setCurrentPage: (page: pages) => {
        set({current_page: page})
    }
})