import cx from 'classnames'

import ExternalLink from '@site/ui/atoms/ExternalLink'

import styles from './SocialButton.css'

const SocialButton = ({ type, url }) =>
  <ExternalLink href={url} aria-label={`open ${type}`}>
    <button className={cx('btn-border', button(type), styles.SocialButton)} aria-hidden="true">
      <i className={`fa ${icon(type)}`} aria-hidden="true"></i>
    </button>
  </ExternalLink>

export default SocialButton

const icon = type => `fa-${type.toLowerCase()}`

const button = type => `btn-${type.toLowerCase()}`