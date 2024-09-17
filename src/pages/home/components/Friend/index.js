import styles from "./Friend.module.css"

export default function Friends({userID, userIcon, userName, lastMessage, totalNoReadMessages}) {
    return (
        <div style={{paddingInline: "50px"}}>
            <a href={`chat/` + userID} className={styles.Friends}>
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
            </a>
            <div className={styles.line}/>
        </div>

    )
}