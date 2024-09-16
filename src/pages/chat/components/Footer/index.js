import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.Footer}>
            <span className={styles.sendImage}>
                <a href="*"><img src="/assets/image.png" alt="send_image" width="45px" height="45px"/></a>
            </span>
            <form className={styles.messageContainer}>
                <input type="text" className={styles.messageArea} placeholder='O que estou pensando hoje?' id="message"/>
                <button type="submit" className={styles.sendBottom}></button>
            </form>
        </footer>
    )
}

export default Footer;