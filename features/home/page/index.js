import React from 'react'

import Layout from '@site/components/layout'

import Timeline from '@site/components/index/timeline'
import Contacts from '@site/components/index/contacts'

import links from '@site/data/social'
import work from '@site/data/work'

import Hero from '../features/hero'
import Projects from '../features/projects'


const Index = () => 
  <Layout>
    <Hero />
    <Projects />

    <Timeline
      cover={'work'}
      events={work}
    />

    <Contacts
      title={'Связаться'}
      cover={'contacts'}
      socialLinks={links}
    />
  </Layout>

export default Index
