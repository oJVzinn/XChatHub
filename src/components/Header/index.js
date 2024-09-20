import styles from "./Header.module.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={styles.Header}>
                <div className={styles.profile}>
                    <Link to="/login"><img src="/assets/person.png" width="45px" height="45px" alt="home" style={{borderRadius: "50%"}}/></Link>
                </div>

                <Link to="/" style={{color: "white", fontSize: "20px", fontWeight: "bold", textDecoration: "none"}}>XChatHub - 0.1 Alpha</Link>

                <div className={styles.friendsManager}>
                    <ul className={styles.friendsList}>
                        <li><Link to="*"><img src="/assets/group.png" width="45px" height="45px" alt="home"/></Link></li>
                        <li><Link to="*"><img src="/assets/add_person.png" width="45px" height="45px" alt="home"/></Link></li>
                    </ul>
                </div>
            </div>

            <div className={ styles.removeSpace }/>
        </header>
    )
}

export default Header