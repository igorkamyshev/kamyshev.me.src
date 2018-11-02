import React from 'react'

import novel from '@site/data/novel'
import links from '@site/data/social'

const container = (WrappedComponent) => () =>
  <WrappedComponent
    title={novel.name}
    tagline={novel.description}
    avatar={novel.photo}
    socialLinks={links}
  />

export default container