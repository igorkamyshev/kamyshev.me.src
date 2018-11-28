import React from 'react'

import Card from '@site/ui/atoms/Card'
import Container from '@site/ui/atoms/Container'
import Picture from '@site/ui/atoms/Picture'

import Person from '../../atoms/Person'
import styles from './Profile.css'
import Social from '../../atoms/Social'

const Profile = ({ name, description, socialLinks, avatar }) => (
  <Container>
    <Card className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Picture className={styles.avatar} src={avatar} alt={`Фотография ${name}`} />
      </div>
      <div className={styles.info}>
        <Person name={name} description={description} />
        <Social links={socialLinks} />
      </div>
    </Card>
  </Container>
)

export default Profile