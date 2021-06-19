
import styles from './Text.module.css'

const CONFIG_COLOR = {
    success: styles.successText,
    warning: styles.warningText,
    danger: styles.dangerText,
    default: styles.text
}

const CONFIG_SIZE = {
    big: styles.bigText,
    default: styles.defaultText,
    small: styles.smallText
}

const CONFIG_ALIGN = {
    left: styles.leftText,
    right: styles.rightText,
    center: styles.centerText,
    justify: styles.justifyText
}

const transformText = (value, strong, italic) => {
    if (strong && italic) {
        return <strong><i>{value}</i></strong>
    }
    else if (strong) {
        return <strong>{value}</strong>
    }
    else if (italic) {
        return <i>{value}</i>
    }
    return value
}

export default function Text({children, strong, italic, size='default', layout='default', align='left'}) {
    return (
        <p className={`${CONFIG_SIZE[size]} ${CONFIG_COLOR[layout]} ${CONFIG_ALIGN[align]}`}>
            {transformText(children, strong, italic)}
        </p>
    )
}