import cx from 'classnames'

import styles from './borderSocialButton.css'
import ExternalLink from '@site/ui/atoms/ExternalLink'

export default ({ type, url }) =>
  <ExternalLink href={url} aria-label={`open ${type}`}>
    <button className={cx('btn', 'btn-just-icon', 'btn-border', button(type), styles.btn)} aria-hidden="true">
      <i className={`fa ${icon(type)}`} aria-hidden="true"></i>
    </button>
  </ExternalLink>

const icon = type => `fa-${type.toLowerCase()}`

const button = type => `btn-${type.toLowerCase()}`
