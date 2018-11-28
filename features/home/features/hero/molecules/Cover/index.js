import React from 'react'

import Picture from '@site/ui/atoms/Picture'

import styles from './Cover.css'

const Cover = () => (
  <div className={styles.сover}>
    <Picture role="presentation" className={styles.image} src="cover.jpg" />
  </div>
)

export default Cover
