import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/chat/:id" element={ <Chat/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters