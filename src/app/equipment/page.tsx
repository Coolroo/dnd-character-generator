'use client'
import { useProgressStore } from "@/lib/store";
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect } from "react";

const PAGE_ID = 4;

export default function EquipmentPage() {

  const router = useRouter();
    const setCurrentPage = useProgressStore((state) => state.setCurrentPage);
    
    useEffect(() => {
        setCurrentPage(PAGE_ID);
    }, [router]);


    return <div></div>
}