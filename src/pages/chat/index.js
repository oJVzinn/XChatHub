import Header from "./components/Header";
import Footer from "./components/Footer";
import {useLoaderData} from "react-router-dom";
import {useEffect} from "react";

function Chat() {
    const id = useLoaderData();
    useEffect(() => {
        alert(id)
    })


    return (
        <>
            <Header/>
            <Footer/>
        </>
    );
}

export default Chat;
