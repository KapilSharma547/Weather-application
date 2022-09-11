import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6f485b6db83ec801d72af738b68300f4`
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])



    return (
        <>
            <div className="container">
                <div className="row " >
                    <div className='col-md-4 k m-auto mt-5' >
                        <input type="search"
                            value={search}
                            className="inputFeild"
                            onChange={(event) => { setSearch(event.target.value) }} />

                        {!city ? (
                            <p> No Data Found </p>
                        ) : (
                            <div>
                                <div className="info">
                                    <h2 className="location">
                                        <i className="fas fa-street-view"></i> {search}
                                    </h2>
                                    <h1 className='temp'>
                                        {city.temp}°Cel
                                    </h1>
                                    <h3 className="tempmin_max"> Min : {city.temp_min}°Cel <br/>
                                     Max : {city.temp_max}°Cel </h3>
                                </div>
                                <div className="wave -one"></div>
                                <div className="wave -two"></div>
                                <div className="wave -three"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tempapp;