import React from 'react'

const TableItem = (props) => {
  let startIndex = (props.currPage - 1) * 4;
  let endIndex = Math.min(props.list.length, props.currPage * 4);
  return (
    <>
        {props.list.slice(startIndex, endIndex).map((el, index)=>{
            return <tr key={el._id}>
                <td>{el.title} </td>
                <td>{el.genre.name}</td>
                <td>{el.numberInStock}</td>
                <td>{el.dailyRentalRate}</td>
                <td><button className='btn btn-danger' onClick={()=>props.deleteMovie(el)}>Delete</button></td>
            </tr>
        })}
    </>
  )
}

export default TableItem