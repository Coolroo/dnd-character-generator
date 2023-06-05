'use client'
import { useProgressStore } from "@/lib/store";
import { useEffect, useLayoutEffect } from "react";

const PAGE_ID = 5;

export default function ReviewPage(){


  const currentPage = useProgressStore((state) => state.current_page);
  const setCurrentPage = useProgressStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage(PAGE_ID);
}, [currentPage])

    return <div></div>
}