import Layout from '../components/layout'

import Hero from '../components/index/hero'
import Cards from '../components/index/cards'

import novel from '../data/novel'
import links from '../data/social'
import projects from '../data/projects'


export default () => 
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
    </Layout>
