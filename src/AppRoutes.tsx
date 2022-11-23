import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='/registro' element={<SignUp />}/>
                <Route path='/entrar' element={<SignIn />}/> 
            </Routes>
        </Router>
    )
}