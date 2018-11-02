import React from 'react'

import HeroOld from '@site/components/index/hero'
import Cover from '../../molecules/Cover'

const Hero = ({ title, tagline, avatar, socialLinks }) => (
  <HeroOld
    title={title}
    tagline={tagline}
    avatar={avatar}
    socialLinks={socialLinks}
  >
    <Cover />
  </HeroOld>
)

export default Hero
