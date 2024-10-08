import { Outlet } from "react-router-dom"

const MainLayout = () =>{

    return(
        <>
        this is header 
        <Outlet /> 
        this if footer
        </>
    )
}
export default MainLayout