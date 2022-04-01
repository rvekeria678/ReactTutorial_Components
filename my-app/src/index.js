import React from "react"
import ReactDOM from "react-dom"
import NavigationBar from "./NavigationBar"
import GoogleMaps from "./GoogleMaps"
import HomeDescription from "./HomeDescription"

function App () {
    return (
        <div>
            <NavigationBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <GoogleMaps />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <HomeDescription />
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
