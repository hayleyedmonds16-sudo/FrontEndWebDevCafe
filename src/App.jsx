import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {items} from './data/data'
import MenuTable from "./components/MenuTable";
import Home from "./Home.jsx"
import FilterableMenuTable from './components/FilterableMenuTable.jsx'
import "leaflet/dist/leaflet.css";
import Map from "./components/Map.jsx";

function App() {
  return(
    <>
    <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <h2>Who We Are</h2>
                    <p>
                        Welcome to our café! We serve freshly
                        prepared food and drinks.
                    </p>
                </div>

                <div className="col-md-4">
                    <h2>Where We Are</h2>
                    <Map />
                </div>

                <div className="col-md-4">
                    <h2>Our Menu</h2>
                    <FilterableMenuTable items={items} />

                    {/* <MenuTable items={items} /> */}
                </div>

            </div>
        </div>
    </>
 
  );
}

export default App;
