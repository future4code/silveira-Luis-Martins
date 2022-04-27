import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ListTripsPage} from "../pages/ListTripsPage"
import {ApplicationFormPage} from "../pages/ApplicationFormPage"
import {LoginPage} from "../pages/LoginPage"
import {AdminHomePage} from "../pages/AdminHomePage"
import {TripDetailsPage} from "../pages/TripDetailsPage"
import {CreateTripPage} from "../pages/CreateTripPage"
import {HomePage} from "../pages/HomePage"


export const Router = () => {
    return (

<BrowserRouter>
<Routes>


<Route path="AdminHomePage" element ={<AdminHomePage/>} />
<Route path="ApplicationFormPage" element ={<ApplicationFormPage/>} />
<Route path="CreateTripPage" element ={<CreateTripPage/>} />
<Route index="HomePage" element ={<HomePage/>} />
<Route path="ListTripsPage" element ={<ListTripsPage/>} />
<Route path="LoginPage" element ={<LoginPage/>} />
<Route path="TripDetailsPage" element ={<TripDetailsPage/>} />


</Routes>
</BrowserRouter>

    )
}