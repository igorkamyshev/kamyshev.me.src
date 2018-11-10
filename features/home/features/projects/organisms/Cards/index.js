import Container from '@site/ui/atoms/Container'

import Card from '../../molecules/Card'
import Description from '../../molecules/Description'

import styles from './Cards.css'

// TODO: add custom media for sm

export default ({ projects }) =>
  <Container className={styles.container}>
    <Description />

    <section className={styles.grid}>
      {projects.map(project => <Card key={project.title} card={project} />)}
    </section>
  </Container>