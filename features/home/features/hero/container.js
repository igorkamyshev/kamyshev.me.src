import React from 'react'

import novel from '@site/data/novel'
import links from '@site/data/social'

const container = (WrappedComponent) => () =>
  <WrappedComponent
    name={novel.name}
    description={novel.description}
    avatar={novel.photo}
    socialLinks={links}
  />

export default container