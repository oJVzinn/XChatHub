import styles from "./Footer.module.css"

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={ styles.Footer }>
            <span><b>&copy; XChatHub - {year}</b></span>
            <span>feito com amor por João Victor</span>
        </footer>
    )
};