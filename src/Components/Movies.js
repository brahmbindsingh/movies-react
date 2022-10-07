// import React, { Component } from 'react'

// class Movies extends Component {
//   async componentDidMount(){
//     let url = "http://localhost:4000/movies"
//     var data = await fetch(url);
//     var parsedData = await data.json();
//     console.log(parsedData);
//   }
//   render() {
//     return (
//       <div>Movies</div>
//     )
//   }
// }

// export default Movies

import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Search from './Search'
import Table from './Table'

const Movies = () => {

  const [inpValue, setInpValue] = useState('')
  const [list, setList] = useState([])
  const [tempList, setTempList] = useState([])
  const [filter, setFilter] = useState('all')
  const [currPage, setCurrPage] = useState(1)

  const filterChange = (newFilter) => {
    getFilterList(filter)
    setFilter(newFilter)
  }

  const selectPage = (value) => {
    if(value===currPage){
      return;
    }
    else{
      setCurrPage(value)
    }
  }

  const getFilterList = (value) => {
    if(value !== 'all'){
      setTempList(list.filter((el)=>{return el.genre.name===value}))
    }
    else{
      setTempList(list)
    }
  }

  const handleInput = (value) => {
    setInpValue(value)
    let filteredList = list.filter((el)=>{return el.title.toLowerCase().includes(value.toLowerCase())})
    setTempList(filteredList)
  }

  const deleteMovie = (singleMovie) => {
    let currList = list

    let filteredList = currList.filter((el)=>{return el._id !== singleMovie._id})

    setTempList(
      tempList.filter((el) => {
        return el !== singleMovie;
      })
    );

    setList(filteredList)
  }

  const getData = async () => {
    let url = "http://localhost:4000/movies"
    var data = await fetch(url);
    var parsedData = await data.json();
    setList(parsedData)
  }

  useEffect(() => {
    getData()
  
    // return () => {
    //   second
    // }
  }, [])
  if(list.length>0){
  return (
      <div className='row my-2' style={{margin: "0"}}>
        <div className='col-md-3 my-4'>
          <Filter filterChange = {filterChange} filter = {filter} />
        </div>
        <div className="col" style={{width: "100%"}}>
          <Search inpValue = {inpValue} handleInput = {handleInput} total = { (tempList.length>0) ? tempList.length : list.length} />
          <Table list = { tempList.length > 0 ? tempList : list} deleteMovie = {deleteMovie} totalPages = {(tempList.length>0) ? Math.ceil(tempList.length/4) : Math.ceil(list.length/4)} currPage = {currPage} selectPage = {selectPage} />
        </div>
      </div>
  )
  }
  else{
    return <p className='my-5 mx-5' style={{fontWeight: 500}}>There are no movies in the database</p>
  }
}

export default Movies