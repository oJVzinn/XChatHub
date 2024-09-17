import Header from "./components/Header";
import Footer from "./components/footer";
import Container from "../../components/container";
import Friends from "./components/Friend";

export default function Home() {
    return (
        <>
            <Header/>
            <Container>
                <Friends userID="1" userIcon="/assets/balbicon.png" userName="Senhor balangada seco" lastMessage="Eu gosto de dar o cu" totalNoReadMessages="1"/>
                <Friends userID="2" userIcon="/assets/balbicon.png" userName="Senhor balangada seco" lastMessage="Eu gosto de dar o cu" totalNoReadMessages="5"/>
            </Container>
            <Footer/>
        </>
    )
}