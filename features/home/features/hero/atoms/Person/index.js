import React from 'react'

import styles from './Person.css'

const Person = ({ name, description }) => (
  <h1 className={styles.name}>
    {name}<br />
    <small className={styles.description}>
      {description}
    </small>
  </h1>
)
export default Person
