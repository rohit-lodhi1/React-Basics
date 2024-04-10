import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer"
import { NavBar } from "./components/navbar"
import { Sidebar } from "./components/sidebar"

export const Layout = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </>
    )
}