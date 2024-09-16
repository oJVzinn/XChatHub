import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.home}>
                <a href="*"><img src="/assets/home.png" width="45px" height="45px" alt="home"/></a>
            </div>

            <span style={ {color: "white", fontSize: "25px", fontWeight: "bold"}}>XChatHub - 0.1 Alpha</span>

            <div className={styles.friendsManager}>
                <ul className={styles.friendsList}>
                    <li><a href="*"><img src="/assets/group.png" width="45px" height="45px" alt="home"/></a></li>
                    <li><a href="*"><img src="/assets/add_person.png" width="45px" height="45px" alt="home"/></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header