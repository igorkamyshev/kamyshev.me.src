import Container from '@site/ui/atoms/Container'

import Card from '../../molecules/Card'
import Description from '../../molecules/Description'

import styles from './Cards.css'

export default ({ projects }) =>
  <Container className={styles.container}>
    <Description />

    <div className="row">
      {projects.map((project, i) => (
        <Card key={project.title} card={project} index={i} arr={project} />
      ))}
    </div>
  </Container>