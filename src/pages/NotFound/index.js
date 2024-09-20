import styles from "./NotFund.module.css";
import Container from "../../components/container";

function NotFound() {
    function buttonAction() {
        window.history.back();
    }

    return (
        <div className={styles.NotFound}>
            <h2 className={styles.title}>Erro 404</h2>
            <img className={styles.logo} src="/favicon.png" alt="x_logo"/>
            <p className={styles.desc}>Que coisa... esta página não existe. Volte para a página principal e tente novamente.</p>
            <button onClick={buttonAction} className={styles.button}></button>
        </div>
    );
}



export default NotFound;