import styles from "./Friend.module.css"
import {Link} from "react-router-dom";

export default function Friends({userID, userIcon, userName, lastMessage, totalNoReadMessages, insertLine}) {
    return (
        <div style={{paddingInline: "50px"}}>
            <Link to={`chat/` + userID} className={styles.Friends}>
                <img src={userIcon} alt="userIcon" width="65px" height="65px" className={styles.userIcon} style={{}}/>
                <div className={styles.userInfos}>
                    <span className={styles.userName}>
                        {userName}
                    </span>

                    <span>
                        {lastMessage}
                    </span>
                </div>


                {
                    totalNoReadMessages >= 1 &&
                    <div style={{width: '100%', display: "flex", justifyContent: "flex-end", paddingInline: "25px"}}>
                        <span className={styles.messagesNoRead}>{totalNoReadMessages}</span>
                    </div>
                }
            </Link>

            {insertLine && <div className={styles.line}/>}
        </div>

    )
}