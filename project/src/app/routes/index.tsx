
import { Route, Routes, Navigate } from "react-router-dom"
import { Register } from "../pages"


export const Rotas = () => {

    return(
        <>
            <Routes>
                <Route   path="/page-register" element={<Register/>}/>
                <Route   path="*" element={<Navigate to="/page-register"/>}/>
            </Routes>
        </>
    )
}