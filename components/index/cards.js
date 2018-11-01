import { css } from 'emotion'

import image from '../../utils/image'


export default ({ title, tagline, cards }) =>
    <div className={`projects-1 ${s.section}`}>
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
        <div className={`card ${s.card}`} data-background="image" style={{ backgroundImage: `url(${image(card.image)})` }}>
            <div className="card-body">
                <h6 className="card-category">{card.categories.join(', ')}</h6>
                <a href={card.link} target="blank">
                    <h3 className="card-title">{card.title}</h3>
                </a>
                <p className="card-description">{card.description}</p>
                <br/>
                <a href={card.link} target="blank" className="btn btn-info btn-round">
                    <i className="fa fa-book" aria-hidden="true"></i> Открыть
                </a>
            </div>
        </div>
    </div>


const s = {
    section: css`
        padding-top: 0px;
    `,
    card: css`
        margin-top: 10px;
    `,
}

const column = (index, length) =>
    (index === length -1 && length % 2 !== 0) ? 12
        : (index % 4 === 0 || index % 4 === 3) ? 7 : 5
