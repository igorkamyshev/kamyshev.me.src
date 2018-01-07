import Layout from '../components/layout'

import Hero from '../components/index/hero'

import novel from '../data/novel'
import links from '../data/social'


export default () => 
    <Layout>
        <Hero
            title={novel.name}
            tagline={novel.description}
            avatar={novel.photo}
            socialLinks={links}
            cover={'cover'}
        />
    </Layout>
