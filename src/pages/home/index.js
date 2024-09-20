import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/container";
import Friends from "./components/Friend";

export default function Home() {
    return (
        <>
            <Header/>
            <Container>
                <Friends userID="1" userIcon="/assets/balbicon.png" userName="Senhor balangada seco"
                         lastMessage="Eu gosto de dar o cu" totalNoReadMessages="1" insertLine="true"/>
                <Friends userID="1" userIcon="/assets/balbicon.png" userName="Senhor balangada seco"
                         lastMessage="Eu gosto de dar o cu" totalNoReadMessages="3"/>
            </Container>
            <Footer/>
        </>
    )
}