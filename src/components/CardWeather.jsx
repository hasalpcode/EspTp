function CardWeather({name,temperature,description,main,sunrise,sunset,img,lon,lat}) {
   
    return(
        <div className="container-fluid ">
            <div className="row d-flex justify-content-center ">
                <div className="card"  style={{ backgroundImage:`url(${img})`,backgroundSize: "cover",backgroundRepeat: 'no-repeat',minHeight: '70vh' }}>
                    <h2 className="ml-auto mr-4 mt-3 mb-0">{name}</h2>
                    <p className="ml-auto mr-4 mb-0 med-font">Main: {main}</p>
                    <p className="ml-auto mr-4 mb-0 med-font">Description: {description}</p><br />
                    
                    <div className="row">
                        <div className="col">
                            <p className="ml-auto float-start mr-4 mb-0 med-font"><b>Sunrise</b> : {sunrise}</p>
                            <p className="ml-auto float-start mr-4 mb-0 med-font"><b>Sunset</b>:  {sunset}</p>
                        </div>
                        <div className="col">
                        
                            <h1 className="ml-auto mr-4 large-font">{temperature}&#176;</h1>
                        </div>
                        <div className="col" >
                            <p style={{marginRight:"-50px"}} className="ml-auto float-start mr-4 mb-0 med-font"><b>Lon</b> : {lon}</p><br />
                            <p style={{marginRight:"-50px"}} className="ml-auto float-start mr-4 mb-0 med-font"><b>Lat</b>: {lat}</p>
                        </div>
                    </div>
                    
                    {/* <p className="time-font mb-0 ml-4 mt-auto">08:30 <span className="sm-font">AM</span></p> */}
                    {/* <p className="ml-4 mb-4">Wednesday, 18 October 2019</p> */}
                </div>
            </div>
        </div>
    )
}

export default CardWeather