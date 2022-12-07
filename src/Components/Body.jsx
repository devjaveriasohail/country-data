import { useNavigate, Routes, Router, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Display from "./Display";






const getLocalItems = () => {
    let data = localStorage.getItem('data');
    if (data) {
        // console.log(JSON.parse(localStorage.getItem('data')));
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return []
    }
};
const Country = () => {

    const [countryData, setCountryData] = useState(getLocalItems());
    const [name, setName] = useState([]);

    const fetchData = async () => {
        await fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then((data) => setCountryData(data));
    };
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(countryData));
    }, [countryData]);
  
    return (
        <div>
            <h1 className="container m-4 text-center"><em>Search Countries Around The World</em></h1>
            <div className="d-flex justify-content-center">
                <input className="m-2" type="text" onChange={(e) => setName(e.target.value)} />
                <button className="m-2 btn btn-light btn-outline-secondary" onClick={fetchData}>Add</button>
            </div>
            < div className="m-4" >
                <table className="table">
                    <thead className="table-secondary">
                        <tr>
                            <th scope="col">Flag</th>
                            <th scope="col">Offical Name</th>
                            <th scope="col">Common Name</th>
                            <th scope="col">Timezones</th>
                        </tr>
                    </thead>
                    {countryData?.map((data) => {
                        return (
                            <tbody className=" table-striped">
                                <tr>
                                    <td scope="col"><img src={data.flags.png} className="img-fluid" width="10%" height="8%" alt="..." /></td>
                                    <td scope="col">{data.name.official.toUpperCase()}</td>
                                    <td scope="col">{data.name.common.toUpperCase()}</td>
                                    <td scope="col">{data.timezones}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
               <Display countryData={countryData} />
            </div>
        </div >
    );

}

export default Country;