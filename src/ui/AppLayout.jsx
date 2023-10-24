import { Outlet } from 'react-router-dom'
import Header from "./Header"

function AppLayout() {
    return (
        <div className='h-screen'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
