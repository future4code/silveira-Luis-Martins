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

<Route index element ={<HomePage/>} />
<Route path="/admin/trips/list" element ={<AdminHomePage/>} />
<Route path="/trips/application" element ={<ApplicationFormPage/>} />
<Route path="/admin/trips/create" element ={<CreateTripPage/>} />
<Route path="/trips/list" element ={<ListTripsPage/>} />
<Route path="/login" element ={<LoginPage/>} />
<Route path="/admin/trips/:id" element ={<TripDetailsPage/>} />


</Routes>
</BrowserRouter>

    )
}