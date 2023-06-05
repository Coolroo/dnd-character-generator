'use client'
import { useProgressStore } from "@/lib/store";
import { useEffect, useLayoutEffect } from "react";

const PAGE_ID = 3;

export default function SkillsPage(){

  const currentPage = useProgressStore((state) => state.current_page);
  const setCurrentPage = useProgressStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage(PAGE_ID);
}, [currentPage])

    return <div></div>

}