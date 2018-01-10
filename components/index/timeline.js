import { css } from 'emotion'
import { Timeline, Event } from 'react-timeline-scribble'

import image from '../../utils/image'


export default ({ events, cover }) =>
    <div className="contactus-1 section-image" style={{ backgroundImage: `url(${image(cover)})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                    <div className={`card card-contact no-transition ${s.card}`}>
                        <Timeline>
                            {events.map((event, index) =>
                                <Event interval={event.interval} title={event.title} subtitle={event.subtitle} key={index}>
                                    {event.description}
                                </Event>
                            )}
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    </div>


const s = {
    card: css`
        padding: 4rem;

        @media (max-width: 767px) {
            padding: 2rem 1rem;
        }
    `,
}
