import styles from "./RegisterBody.module.css"

export default function LoginBody() {
    return (
        <div className={styles.LoginBody}>
            <div className={styles.info}>
                <h1 className={styles.title}>XChatHub</h1>
                <p className={styles.desc}>Conecte a pessoas e viva<br/>momentos incríveis conosco!</p>
            </div>

            <div className={styles.registerBox}>
                <form className={styles.registerForm}>
                    <input className={styles.inputBox} type="text" placeholder="Usuário" id="user"/>
                    <input className={styles.inputBox} type="text" placeholder="Email" id="email"/>
                    <input className={styles.inputBox} type="password" placeholder="Senha" id="password"/>
                    <div className={styles.selectContainer}>
                        <div className={styles.select}>
                            <span>Sexo:</span>
                            <select className={styles.selectBox} id="gender">
                                <option value="male">Masculino</option>
                                <option value="female">Feminino</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <span>Aniversário:</span>
                            <input className={styles.selectBox} type="date" id="birthday"/>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submitButton}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}