import React from 'react'

import Cover from '../../molecules/Cover'
import Profile from '../../molecules/Profile'

const Hero = ({ name, description, avatar, socialLinks }) => (
  <header>
    <Cover />
    <Profile
      name={name}
      description={description}
      avatar={avatar}
      socialLinks={socialLinks}
    />
  </header>
)

export default Hero
