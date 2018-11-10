import React from 'react'

import projects from '@site/data/projects'

const container = (WrappedComponent) => () =>
  <WrappedComponent projects={projects} />

export default container