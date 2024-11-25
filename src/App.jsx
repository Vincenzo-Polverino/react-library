import { BrowserRouter, Routes } from "react-router"
import Home from "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import About from "./pages/About.jsx"
import Contacts from "./pages/Contacts.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<Aboput />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
