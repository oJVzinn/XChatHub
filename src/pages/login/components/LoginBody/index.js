import styles from "./LoginBody.module.css"
import {Link} from "react-router-dom";

export default function LoginBody() {
    return (
        <div className={styles.LoginBody}>
            <div className={styles.info}>
                <h1 className={styles.title}>XChatHub</h1>
                <p className={styles.desc}>Conecte a pessoas e viva<br/>momentos incríveis conosco!</p>
            </div>

            <div className={styles.loginBox}>
                <div className={styles.login}>
                    <form className={styles.loginForm}>
                        <input className={styles.inputBox} type="text" placeholder="Email ou senha" id="email"/>
                        <input className={styles.inputBox} type="password" placeholder="Senha" id="password"/>
                        <button type="submit" className={styles.submitButton}>Login</button>
                    </form>

                    <Link to="*" className={styles.forgetPassword}>Esqueceu sua senha?</Link>
                </div>
                <div className={styles.line}/>
                <div className={styles.registerContainer}>
                    <Link to="/register" className={styles.registerButton}>Criar uma nova conta</Link>
                </div>
            </div>
        </div>
    )
}