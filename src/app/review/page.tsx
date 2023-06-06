'use client'
import { useProgressStore } from "@/lib/store";
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect } from "react";

const PAGE_ID = 5;

export default function ReviewPage(){
  
  const router = useRouter();
    const setPageStatus = useProgressStore((state) => state.setPageStatus);
    const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
    
    useEffect(() => {
        setCurrentPage(PAGE_ID);
    }, [router]);

    return <div></div>
}