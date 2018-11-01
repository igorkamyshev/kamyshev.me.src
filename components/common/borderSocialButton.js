import cx from 'classnames'

import styles from './borderSocialButton.css'

export default ({ type, url }) =>
    <a href={url} target="blank" aria-label={`open ${type}`}>
        <button className={cx('btn', 'btn-just-icon', 'btn-border', button(type), styles.btn)} aria-hidden="true">
            <i className={`fa ${icon(type)}`} aria-hidden="true"></i>
        </button>
    </a>

const icon = type => `fa-${type.toLowerCase()}`

const button = type => `btn-${type.toLowerCase()}`
