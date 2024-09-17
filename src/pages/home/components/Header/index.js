import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={styles.Header}>
                <div className={styles.profile}>
                    <a href="*"><img src="/assets/myicon.png" width="45px" height="45px" alt="home" style={{borderRadius: "50%"}}/></a>
                </div>

                <span style={{color: "white", fontSize: "20px", fontWeight: "bold"}}>XChatHub - 0.1 Alpha</span>

                <div className={styles.friendsManager}>
                    <ul className={styles.friendsList}>
                        <li><a href="*"><img src="/assets/group.png" width="45px" height="45px" alt="home"/></a></li>
                        <li><a href="*"><img src="/assets/add_person.png" width="45px" height="45px" alt="home"/></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={ styles.removeSpace }/>
        </header>
    )
}

export default Header