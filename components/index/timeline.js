import cx from 'classnames'
import { Timeline, Event } from 'react-timeline-scribble'

import image from '../../utils/image'
import styles from './timeline.css'


export default ({ events, cover }) =>
    <div className="contactus-1 section-image" style={{ backgroundImage: `url(${image(cover)})` }}>
        <div className="container">
            <div className={cx('card', 'card-contact', styles.card)}>
                <Timeline>
                    {events.map(event =>
                        <Event interval={event.interval} title={event.title} subtitle={event.subtitle} key={event.title}>
                            {event.description}
                        </Event>
                    )}
                </Timeline>
            </div>
        </div>
    </div>
