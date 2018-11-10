import cx from 'classnames'
import React from 'react'

import styles from './Container.css'

const Container = ({ children, className }) => (
  <div className={cx(styles.container, className)}>
    {children}
  </div>
)

export default Container
