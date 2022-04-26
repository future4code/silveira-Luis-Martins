import { BrowserRouter, Routes, Route } from "react-router-dom";
import {TripsPage} from "../pages/ListTripsPage"
import {SignupUser} from "../pages/ApplicationFormPage"
import {LoginAdm} from "../pages/LoginPage"
import {FormUser} from "../pages/AdminHomePage"
import {DetailsPage} from "../pages/TripDetailsPage"
import {FormAdm} from "../pages/CreateTripPage"
import {HomePage} from "../pages/HomePage"


export const Router = () => {
    return (

<BrowserRouter>
<Routes>


<Route index="FormUser" element ={<FormUser/>} />
<Route path="formPage" element ={<SignupUser/>} />
<Route path="FormAdm" element ={<FormAdm/>} />
<Route path="HomePage" element ={<HomePage/>} />
<Route path="TripsPage" element ={<TripsPage/>} />
<Route path="LoginAdm" element ={<LoginAdm/>} />
<Route path="DetailsPage" element ={<DetailsPage/>} />


</Routes>
</BrowserRouter>

    )
}