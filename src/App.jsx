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
import { BrowserRouter, Routes, Route } from "react-router";
import FoodOrders from "./components/FoodOrder.jsx";
import Navigation from "./components/Navigation.jsx";
import NoPage from "./components/NoPage.jsx";

function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="orders" element={<FoodOrders />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

//npm run dev cause u keep forgetting 