import cx from 'classnames'

import ExternalLink from '@site/ui/atoms/ExternalLink'

import styles from './SocialButton.css'

export const Social = {
  Telegram: 'Telegram',
  GitHub: 'GitHub',
  LinkedIn: 'LinkedIn',
  Instagram: 'Instagram',
  Twitter: 'Twitter',
}

const socialSpecificButtonClass = type => styles[type.toLowerCase()]
const socialSpecificIconClass = type => `fa-${type.toLowerCase()}`

const SocialButton = ({ type, url }) =>
  <ExternalLink href={url} aria-label={`Открыть социальную сеть ${type}`}>
    <button
      className={cx(socialSpecificButtonClass(type), styles.SocialButton)}
      aria-hidden="true"
    >
      <i className={cx('fa', socialSpecificIconClass(type))} aria-hidden="true" />
    </button>
  </ExternalLink>

export default SocialButton