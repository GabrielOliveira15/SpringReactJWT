
import React from 'react'
import { usePagination, DOTS } from '../../hooks/usePagination';
import * as FaIcons from 'react-icons/fa';

const Pagination = (props) => {
  
    const { onPageChange, 
            totalCount, 
            siblingCount = 1, 
            currentPage, 
            pageSize  } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })

    let lastPage = paginationRange[paginationRange.length -1 ];
    
    if (currentPage === 0 || paginationRange.length < 2){
        return null;
    }
    
     
    const onNext = () => {
        onPageChange(currentPage < lastPage ? currentPage + 1: lastPage);
    } 
     
    const onFirst = () => {
        onPageChange(1) 
    } 

    const onLast = (lastPage) => {
        onPageChange(lastPage)
    }


    const onPrevious = () => {
        onPageChange( currentPage > 0 ? currentPage - 1: 1); 
    }
 

  return (
    <div className='row clearfix'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
             <div className='pagination'>
                <p>
                    Mostrando &nbsp;
                    <span className='badge bg-secondary'>{ pageSize * currentPage }</span>&nbsp;
                    de &nbsp;
                    <span className='badge bg-secondary'>{Math.ceil(totalCount/pageSize)}</span>&nbsp;
                    Páginas &nbsp; de &nbsp; <span className='badege bg-secondary'>{totalCount}</span>&nbsp;     
                    Registros cadastrados.
                </p> 
             </div>          
        </div> 
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
           <ul className='pagination justify-content-center'>
               <li>
                  <button onClick={()=>onFirst()} className={currentPage === 1 ? 'btn btn-sm page-link disabled':'btn btn-sm page-link'}>
                      <i className=''>{<FaIcons.FaAngleLeft/>}</i>  
                  </button>
               </li>
            </ul>  
            <li>
               <button onClick={()=>onPrevious()} className={currentPage === 1 ? 'page-link btn btn-sm disabled':'page-link btn btn-sm'}>
                    <i className=''>{<FaIcons.FaAngleDoubleLeft/>}</i>
                </button>
            </li>

            { 
                paginationRange.map((pageNumber, index)=>{
                    if (pageNumber === DOTS ){
                        return <li key={index} className='dots'>&#8230;</li>
                    }
                    return (
                        <li key={index} className={currentPage === pageNumber ? 'page-item active':'page-item'}>
                            <button className='btn btn-sm page-link' onClick={()=>onPageChange(pageNumber)}>
                                {pageNumber}
                            </button>

                        </li>
                    )
                })
                
            }
            <li>
               <button onClick={()=>onNext()} className={currentPage < lastPage ? 'btn btn-sm page-link': 'btn btn-sm page-link disabled'}>
                   <i className=''>{<FaIcons.FaAngleDoubleRight/>}</i> 
               </button>
            </li>
            <li>
                <button onClick={()=>onLast(lastPage)} className={currentPage === lastPage ? 'disabled btn btn-sm page-link': 'btn btn-sm page-link'}>
                    <i className=''>{<FaIcons.FaAngleRight/>}</i>
               </button>
            </li>   
        </div>

    </div>
  )
}

export default Pagination