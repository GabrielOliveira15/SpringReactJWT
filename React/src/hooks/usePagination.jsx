
import React, { useMemo } from 'react'

export const DOTS = '...';

const range =( start, end) => {
  let length = end - start + 1;
  return Array.from({length}, (_,idx) => idx+start );
}

export const usePagination = ( props ) => {
   
    const {
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    } = props;
  
    
    const paginationRange = useMemo(()=>{
      const totalPageCount = Math.ceil(totalCount / pageSize);
      const totalPageNumbers = siblingCount + 5;
      if (totalPageNumbers >= totalPageCount){
        return range(1, totalPageCount);
      }
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
       
      const showLeftDots = leftSiblingIndex > 2;
      const showRightDots = rightSiblingIndex < totalPageCount - 2;
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount; 
      
      if (showLeftDots && showRightDots){
        let leftCount = 3+2*siblingCount;
        let leftRange = range(1,leftCount);
        return [...leftRange, DOTS, totalPageCount]
      } 

      if (showLeftDots && !showRightDots){
        let rightCount = 3+2*siblingCount;
        let rightRange = range(totalPageCount - rightCount + 1, totalPageCount);
        return [firstPageIndex, DOTS, ...rightRange]
      } 

      if (showLeftDots && showRightDots){
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      } 


    },[totalCount, pageSize, siblingCount, currentPage] );

    return paginationRange;
}

