import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "../components/Body"
import AboutScreen from "../screens/AboutScreen"
import ContatoScreen from "../screens/ContatoScreen"
import HomeScreen from "../screens/HomeScreen.jsx"

export default function RootNavigation(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/contato" element={<ContatoScreen />} />
                    <Route path="/sobre" element={<AboutScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}