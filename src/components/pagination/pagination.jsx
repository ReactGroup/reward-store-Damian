import React, { useState } from "react";
export const usePagination = (items, itemsPerPage) => {
  const [activePage, setActivePage] = useState(1);
  const pagesTotal = Math.ceil(items.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  };

  const nextPage = () => {
    setActivePage((activePage) => Math.min(activePage + 1, pagesTotal));
  };

  const prevPage = () => {
    setActivePage((activePage) => Math.max(activePage - 1, 1));
  };

  const getPage = (page) => {
    const pageNumber = Math.max(1, page);
    setActivePage((activePage) => Math.min(pageNumber, pagesTotal));
  };

  return {
    getCurrentItems,
    getPage,
    nextPage,
    prevPage,
    activePage,
    pagesTotal,
  };
};
