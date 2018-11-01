import React from 'react'

import Layout from '@site/components/layout'

import Hero from '@site/components/index/hero'
import Cards from '@site/components/index/cards'
import Timeline from '@site/components/index/timeline'
import Contacts from '@site/components/index/contacts'

import novel from '@site/data/novel'
import links from '@site/data/social'
import projects from '@site/data/projects'
import work from '@site/data/work'


const Index = () => 
  <Layout>
    <Hero
      title={novel.name}
      tagline={novel.description}
      avatar={novel.photo}
      socialLinks={links}
      cover={'cover'}
    />

    <Cards
      title={'Проекты'}
      tagline={'Созданы с любовью и мастерством'}
      cards={projects}
    />

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
