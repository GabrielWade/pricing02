import AirCharge from "./pages/airCharge";

import NavBar from "./components/navBar";

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Router(){
    return(
        <BrowserRouter>

            <NavBar/>

            <Routes>
                <Route path="/aircharge" element={<AirCharge/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;