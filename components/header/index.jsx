import styles from './index.module.scss'

export default function Header(props) {
    return (
        <>
            <div className={styles.head}>
                <div className={styles.headMain}>
                    <a href="/" className={styles.logo}>
                        <img src='/src/assets/imgs/index/logo_title.svg' alt='logo' />
                    </a>
                    <div className={styles.menuList}>
                        <div style={{ "borderLeft": "none", "paddingLeft": "0" }}><a href="/" rel="nofollow noopener noreferrer" ><span>About</span></a></div>
                        <div><a href="/" rel="nofollow noopener noreferrer"><span>Features</span></a></div>
                        <div onClick={props.scrollToUseCases}><span>Use cases</span></div>
                        <div onClick={props.scrollToTokenomics}><span>Tokenomics</span></div>
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
