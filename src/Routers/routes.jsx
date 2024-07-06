import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/index.jsx'
import Info from '../Pages/Info/index.jsx'
import Lista from '../Pages/Lista/index.jsx'
import Denuncia from '../Pages/Denuncia/index.jsx'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/informacao" element={<Info />} ></Route>
                <Route path="/lista" element={<Lista/>} ></Route>
                <Route path="/fazerdenuncia" element={<Denuncia/>} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes