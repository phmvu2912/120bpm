import { Outlet } from "react-router-dom"
import Header from "../components/client/header/Header"
import Sidebar from "../components/client/sidebar/Sidebar"

const LayoutClient = () => {


    return (
        <div className="flex">
            <div className="">
                {/* Sidebar */}
                <Sidebar />
            </div>

            <div className="flex-1 px-4">
                {/* Header */}
                <Header />

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutClient