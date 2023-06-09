import { ProgressBarStep, pages } from "@/types";
import { StateCreator } from "zustand";

export interface ProgressSlice{
    progress: ProgressBarStep[];
    setCurrentPage: (pageId: number) => void;
    setPageStatus: (pageId: number, status: 'complete' | 'current' | 'upcoming') => void;
    setData: (state: ProgressSlice) => void;
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
    current_page: 1,
    setCurrentPage: (pageId: number) => {
        set(state => {
            const newProgress = state.progress.map((step) => {
                if(step.id === pageId){
                    return {...step, status: step.status === 'complete' ? 'complete' : 'current'}
                }
                else{
                    return {...step, status: step.status === 'complete' ? 'complete' : 'upcoming'}
                }
            });
            return {progress: newProgress} as ProgressSlice;
        })
    },
    setPageStatus: (pageId: number, status: 'complete' | 'current' | 'upcoming') => {
        set(state => {
            const newProgress = state.progress.map((step) => {
                if(step.id === pageId){
                    return {...step, status: status}
                }
                return step;
            });
            return {progress: newProgress} as ProgressSlice;
        })
    },
    reset: () => {
        set({progress: defaultValue})
    },
    setData: (state: ProgressSlice) => {
        set(state)
    }
})