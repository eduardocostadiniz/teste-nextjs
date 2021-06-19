import Link from 'next/link'

import styles from './Anchors.module.css'

export function LinkWrapper({children, href, className=styles.defaultLink, ...props}) {
    return (
        <Link href={href}>
            <a className={className} {...props}>{children}</a>
        </Link>
    )
}

export function RawLink({children, className=styles.defaultLink, ...props}){
    return (
        <a className={className} {...props}>{children}</a>
    )
}