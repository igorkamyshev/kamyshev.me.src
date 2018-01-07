import { css } from 'emotion'


export default ({ type, url }) =>
    <a href={url} target="blank">
        <button className={`btn btn-just-icon btn-border ${button(type)} ${s.btn}`}>
            <i className={`fa ${icon(type)}`} aria-hidden="true"></i>
        </button>
    </a>


const s = {
    btn: css`
        margin: 0.3rem;
    `,
}

const icon = type => `fa-${type.toLowerCase()}`

const button = type => `btn-${type.toLowerCase()}`
