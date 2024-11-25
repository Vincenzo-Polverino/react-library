import { Outlet } from "react-router"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function Layout() {

    return (
        <>
            <header>
                <AppHeader />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <AppFooter />
            </footer>
        </>
    )
}