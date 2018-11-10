import cx from 'classnames'
import React from 'react'

import ExternalLink from '@site/ui/atoms/ExternalLink'
import image from '@site/utils/image'
import styles from './Card.css'

const column = (index, length) =>
  (index === length - 1 && length % 2 !== 0) ? 12
    : (index % 4 === 0 || index % 4 === 3) ? 7 : 5

const Card = ({ card, index, arr }) => (
  <div className={`col-md-${column(index, arr.length)}`} key={card.title}>
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
  </div>
)

export default Card
