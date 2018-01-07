import Layout from '../components/layout'

import Hero from '../components/index/hero'

import novel from '../data/novel'


export default () => 
    <Layout>
        <Hero
            title={novel.name}
            tagline={novel.description}
            avatar={novel.photo}
            cover={'cover'}
        />
    </Layout>
