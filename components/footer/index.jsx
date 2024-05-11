import styles from './index.module.scss'

export default function Footer(props) {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerMain}>
                    <a href="/" className={styles.logo}>
                        <img src='/src/assets/imgs/index/logo_title.svg' alt='logo' />
                    </a>
                    <div className={styles.menuList}>
                        <div style={{ "borderLeft": "none", "paddingLeft": "0" }}><a href="/" rel="nofollow noopener noreferrer" ><span>About</span></a></div>
                        <div><a href="/" rel="nofollow noopener noreferrer"><span>Features</span></a></div>
                        <div onClick={props.scrollToUseCases}><span>Use cases</span></div>
                        <div onClick={props.scrollToTokenomics}><span>Tokenomics</span></div>
                        <div><a href="/" rel="nofollow noopener noreferrer"><span>FAQ</span></a></div>
                    </div>
                    <div className={`${styles.linkList} ${'flex-gap24'}`}>
                        <a href="/" rel="nofollow noopener noreferrer"><img src='/src/assets/imgs/others/x.svg' alt='icon' /></a>
                        <a href="/" rel="nofollow noopener noreferrer"><img src='/src/assets/imgs/others/tg.svg' alt='icon' /></a>
                        <a href="/" rel="nofollow noopener noreferrer"><img src='/src/assets/imgs/others/book.svg' alt='icon' /></a>
                    </div>
                </div>
                <p>
                    © 2024 PinLink • All Rights Reserved
                </p>
            </div >

        </>
    )
}
