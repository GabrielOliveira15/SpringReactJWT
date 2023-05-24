
import React, { Fragment } from 'react'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa';

const TableHeader = ({header, onSorting}) => {
    const [ sortingField, setSortingField ] = useState('');
    const [ sortingOrder, setSortingOrder ] = useState('asc');

    const onSortingChange = (field) => {
        const order = field === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc'
        setSortingField(field)
        setSortingOrder(order)
        onSorting(field, order)
    }
     

  return (
    <Fragment>
        <thead className='cf'>
            <tr className='auto bg-success text-white'>
                {
                    header.map((linha, index) =>{
                        return (
                            <th key={index} style={{ textAlign:"center"}}>
                               <button className='btn btn-link btn-success text-white text-decoration-none'
                                    onClick={()=> linha.sortable ? onSortingChange(linha.field):null}>
                                    {linha.name}
                                    {sortingField && sortingField === linha.field && 
                                            ( sortingOrder === 'asc' ? FaIcons.FaArrowDown : FaIcons.FaArrowUp ) }
                                </button> 
                            </th>
                        )
                    })
                }
                <th style={{ textAlign:"center"}}>
                    <button className='btn btn-link btn-success text-white text-decoration-none' >
                         Ações
                    </button>
                </th>
            </tr>
        </thead>
    </Fragment>
  )
}

export default TableHeader