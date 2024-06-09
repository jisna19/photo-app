import React, { useState } from 'react'

const Search = () => {
    const[data,changedata]=useState(
        {
            "userid":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">userid</label>
                            <input type="text" className="form-control" name='userid' value={data.userid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search