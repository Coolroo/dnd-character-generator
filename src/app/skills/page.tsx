'use client'
import { useProgressStore } from "@/lib/store";
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect } from "react";

const PAGE_ID = 3;

export default function SkillsPage(){

  const router = useRouter();
    const setPageStatus = useProgressStore((state) => state.setPageStatus);
    const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
    
    useEffect(() => {
        setCurrentPage(PAGE_ID);
    }, [router]);

    return <div></div>

}