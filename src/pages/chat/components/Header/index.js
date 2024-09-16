import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.Header}>
            <div className={styles.container}>
            <span style={{display: "flex", alignItems: "center"}}>
                <img src="/assets/balbicon.png" className={styles.userIcon} alt="user-icon"/>
            </span>
                <div className={styles.userInfo}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%"}}>
                    <span className={styles.userName}>
                        Senhor balanga seco
                    </span>

                        <a href="*" className={styles.moreInfo}>
                            Clique para mais informações
                        </a>
                    </div>
                    <span>
                    <a href="*"><img src="/assets/more_vert.png" alt="more_vert" width="45px" height="45px" style={{paddingInline: "50px"}}/></a>
                </span>
                </div>
            </div>

        </header>
    )
}

export default Header;