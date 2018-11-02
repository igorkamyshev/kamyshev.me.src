import React from 'react'

import SocialButton from '@site/ui/molecules/SocialButton'
import styles from './Social.css'

const Social = ({ links }) => (
  <div className={styles.wrapper}>
    {links.filter(link => link.primary).map((link, index) =>
      <SocialButton key={index} type={link.type} url={link.url} />
    )}
  </div>
)

export default Social
