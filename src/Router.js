import AirCharge from "./pages/airCharge";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";


import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Router(){
    return(
        <BrowserRouter>
            <NavBar/>
            <SideBar/>
            <Routes>
                <Route path="/aircharge" element={<AirCharge/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;