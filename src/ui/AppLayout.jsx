import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
    return (
        <div className='h-screen'>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
