import React from 'react'

import styles from './Cover.css'
const image = require('./cover.jpg')

const Cover = () => (
  <div className={styles.сover}>
    <img className={styles.image} src={image} />
  </div>
)

export default Cover
