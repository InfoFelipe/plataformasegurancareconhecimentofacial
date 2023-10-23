
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Register } from "../pages"


export const Rotas = () => {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route   path="/page-register" element={<Register/>}/>
                <Route   path="*" element={<Navigate to="/page-register"/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}