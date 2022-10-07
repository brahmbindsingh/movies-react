import React from 'react'

function Filter(props) {
  return (
    <ul className='list-group'>
      <li className = {`list-group-item ${(props.filter==='all') ? "active" : ""}`} key={'all'} onClick = {()=>props.filterChange('all')}>All Genres</li>
      <li className = {`list-group-item ${(props.filter==='Action') ? "active" : ""}`} key={'Action'} onClick = {()=>props.filterChange('Action')}>Action</li>
      <li className = {`list-group-item ${(props.filter==='Comedy') ? "active" : ""}`} key={'Comedy'} onClick = {()=>props.filterChange('Comedy')}>Comedy</li>
      <li className = {`list-group-item ${(props.filter==='Thriller') ? "active" : ""}`} key={'Thriller'} onClick = {()=>props.filterChange('Thriller')}>Thriller</li>
    </ul>
  )
}

export default Filter