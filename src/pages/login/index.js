import Header from "../../components/Header";
import Container from "../../components/container";
import Footer from "../../components/Footer";
import LoginBody from "./components/LoginBody";

export default function Login() {
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