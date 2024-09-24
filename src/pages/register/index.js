import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/container";
import LoginBody from "./components/RegisterBody";


export default function Register() {
    return (
        <>
            <Header/>
            <Container>
                <LoginBody/>
            </Container>
            <Footer/>
        </>
    )
}