
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Register } from "../pages"
import { ThemeProvider } from "@emotion/react"
import { LightTheme } from "../shared/themes"


export const Rotas = () => {

    return(
        <>
        <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
            <Routes>
                <Route   path="/page-register" element={<Register/>}/>
                <Route   path="*" element={<Navigate to="/page-register"/>}/>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
        </>
    )
}