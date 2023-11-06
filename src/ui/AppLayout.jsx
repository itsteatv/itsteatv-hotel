import { Outlet } from 'react-router-dom'
import Header from "./Header"

function AppLayout() {
    return (
        <div className='h-screen touch-pan-x touch-pan-y'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
