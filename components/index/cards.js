import cx from 'classnames'

import image from '../../utils/image'
import styles from './cards.css'


export default ({ title, tagline, cards }) =>
  <div className={cx('projects-1', styles.section)}>
    <div className="container">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">{title}</h2>
          <h5 className="description">{tagline}</h5>
        </div>
      </div>
      <div className="space-top"></div>

      <div className="tab-content">
        <div className="tab-pane active" role="tabpanel">
          <div className="row">
            {cards.map(renderCard)}
          </div>
        </div>
      </div>
    </div>
  </div>

const renderCard = (card, index, arr) =>
  <div className={`col-md-${column(index, arr.length)}`} key={card.title}>
    <div className={cx('card', styles.card)} data-background="image" style={{ backgroundImage: `url(${image(card.image)})` }}>
      <a href={card.link} target="blank">
        <div className="card-body">
          <h6 className="card-category">{card.categories.join(', ')}</h6>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
          <br />
        </div>
      </a>
    </div>
  </div>

const column = (index, length) =>
  (index === length - 1 && length % 2 !== 0) ? 12
    : (index % 4 === 0 || index % 4 === 3) ? 7 : 5
