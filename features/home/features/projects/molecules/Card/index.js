import cx from 'classnames'
import React from 'react'

import ExternalLink from '@site/ui/atoms/ExternalLink'
import image from '@site/utils/image'
import styles from './Card.css'

// TODO: add margin-bottom: 0

const Card = ({ card }) => (
  <div className={cx('card', styles.card)} data-background="image" style={{ backgroundImage: `url(${image(card.image)})` }}>
    <ExternalLink href={card.link}>
      <div className="card-body">
        <h6 className="card-category">{card.categories.join(', ')}</h6>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <br />
      </div>
    </ExternalLink>
  </div>
)

export default Card
