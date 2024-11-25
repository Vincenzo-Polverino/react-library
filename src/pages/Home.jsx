import MainMenu from "../components/MainManu"

export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>

                <MainMenu />

            </header>
            <main>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla soluta tempora eveniet vel. Quibusdam sed, facilis eum consequuntur debitis quo illo sequi ut voluptates tempore ipsa nobis! Veritatis, ad rem?</p>
            </main>
            <footer>
                <p>Copyright 2024</p>
            </footer>
        </>
    )
}