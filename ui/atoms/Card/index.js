import cx from 'classnames'
import React from 'react'

import styles from './Card.css'

const Card = ({ children, className }) => (
  <div className={cx(styles.card, className)}>
    {children}
  </div>
)

export default Card
