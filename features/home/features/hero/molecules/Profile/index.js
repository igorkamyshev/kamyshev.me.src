import React from 'react'

import image from '@site/utils/image'

import Person from '../../atoms/Person'
import styles from './Profile.css'
import Social from '../../atoms/Social'

const Profile = ({ name, description, socialLinks, avatar }) => (
  <div className={styles.wrapper}>
    <div className={styles.avatarWrapper}>
      <img className={styles.avatar} src={image(avatar)} alt={`Фотография ${name}`} />
    </div>
    <div className={styles.info}>
      <Person name={name} description={description} />
      <Social links={socialLinks} />
    </div>
  </div>
)

export default Profile