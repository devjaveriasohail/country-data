import React, { useRef, useState } from "react";

const Display = ({ countryData }) => {

    const ref = useRef(null)
    const [inputData, setInputData] = useState('');

    const openModal = () => {
        ref.current.click()
        // console.log("button clicked")
    }
    const addItem = () => {
        //    return( data-bs-dismiss="modal" )
        // console.log("additem")
    }

    // console.log(countryData)
    // console.log(inputData)
    return (

        <div>
            {countryData?.map((data) => {
                return (<div   >
                    <div className="card text-center bg-light m-4 p-2">
                        {/* {width:'1000px', height:'350px',justifyContent:'center' */}
                        <img src={data.flags.png} className=" rounded card-img-top p-4" alt="..." height='350px' width='800px' />
                        <div className="card-body">
                            <h1 className="card-title ">{data.name.official.toUpperCase()}</h1>
                            <h4 className="card-title ">Common Name: {data.name.common.toUpperCase()}</h4>
                            <table class="table">

                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Contient: </td>
                                        <td>{data.continents}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Timezones:</td>
                                        <td> {data.timezones}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td> Area:</td>
                                        <td> {data.area}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Region:  </td>
                                        <td>{data.region}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Sub Region :</td>
                                        <td>{data.subregion}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Border: </td>
                                        <td>{JSON.stringify(data.borders)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Currencies:</td>
                                        <td>{JSON.stringify(data.currencies)}</td>
                                    </tr>

                                </tbody>
                            </table>
                            <h4> <a href={data.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Map</a></h4>
                            <p className="card-text ">Language: {JSON.stringify(data.languages)}</p></div >
                        <p id="language" className="card-text" >Other Language: {inputData}</p>
                        <button ref={ref} type="button" className="btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onClick={openModal}>
                            Update Language</button></div >
                </div >

                )
            })}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Edit Language</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="addItems modal-body">
                            <input type="text" className="form-control m-2" placeholder="Add Language"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}

                            />
                            {/* <div className="modal-body">
                            <input className="m-2" type="text" title="etitle" />
                             */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => addItem()} >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

};

export default Display;