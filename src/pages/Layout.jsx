import { Outlet } from "react-router"

import MainMenu from "../components/MainManu"

export default function Layout() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>

                <MainMenu />

            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyright 2024</p>
            </footer>
        </>
    )
}