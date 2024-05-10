import styles from './index.module.scss'

export default function Header() {
    return (
        <>
            <div className={styles.head}>
                <div className={styles.headMain}>
                    <a href="/" className={styles.logo}>
                        <img src='/src/assets/imgs/index/logo_title.svg' alt='logo' />
                    </a>
                    <div className={styles.menuList}>
                        <a href="/" rel="nofollow noopener noreferrer" style={{ "borderLeft": "none", "paddingLeft": "0" }}><span>About</span></a>
                        <a href="/" rel="nofollow noopener noreferrer"><span>Features</span></a>
                        <a href="/" rel="nofollow noopener noreferrer"><span>Use cases</span></a>
                        <a href="/" rel="nofollow noopener noreferrer"><span>Tokenomics</span></a>
                    </div>
                    <div className={styles.h5Menu}>
                        <div className='flex-gap24'>
                            <a className='corner-border-button' href="/" rel="nofollow noopener noreferrer">Enter dApp</a>
                            <a className='button' href="/" rel="nofollow noopener noreferrer">Stake</a>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
