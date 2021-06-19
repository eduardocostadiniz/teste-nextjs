import styles from './Container.module.css'

import Header from '../Header'
import Footer from '../Footer'

export default function Container({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}