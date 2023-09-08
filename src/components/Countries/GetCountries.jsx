import React, { useEffect,useState,useRef} from 'react';
//import {v4  as uuid} from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

function GetCountries() {
    
const [countries,setCountries]=useState([])
const [segment,setSegment]=useState("all")

const searchInput=useRef("")
const region=useRef("")

const getCountries =async ()=>{
    try{
        const result =await axios.get(`https://restcountries.com/v3.1/${segment}`)
        if(result.status === 200){
            setCountries(result.data)
        }

    }
    catch(error){
        console.error(error)
    }


}
const searchCountries =async (e) =>{
    e.preventDefault();

    let search = searchInput.current.value
    if(search === ""){
        reset()
        return
    }
    setSegment(`name/${search}`)

}
const reset=()=>{
    setSegment("all")
}

const searchByregion=()=>{
    let selectedRegion=region.current.value
    if(selectedRegion ===""){
        return

    }
    setSegment(`region/${selectedRegion}`)
}
useEffect(() => {
getCountries()
} , [segment])
  return (
    <>
    <div className="row">
        <div className="m-2 text-center">
            <h1>List of countries</h1>
        </div>
        <div className="col-md-4 text-end">
                    <input ref={searchInput} onChange={searchCountries} class="form-control me-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        <div className="col-md-8">
            <select onChange={searchByregion} ref={region} className=''>
                <option value="">filtrer par région</option>
                <option value="africa">afrique</option>
                <option value="asia">asia</option>
                <option value="europe">europe</option>
                <option value="americas">amerique</option>
                <option value="oceania">oceania</option>


            </select>
         </div>
    </div>

    <div className="row m-2">
        {countries.map((country,index)=>(
            <div className='col-md-2' key={index}>
                 <div className='card my-2'>
                 <img className='card-img-top' src={country.flags.png} alt=''/>
                 <div className="card-body">
                 <div className="card-title">{country.name.official}</div>
                 <div className="card-title">Region:{country.region}</div>
                 <div className="card-title">Capital:{country.capital}</div>

                 <div className="card-text"></div>
                 </div>

                 </div>
            </div>
        ))}
    </div>
    </>

  )
}

export default GetCountries