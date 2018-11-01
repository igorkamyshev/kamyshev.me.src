import { css } from 'emotion'

import SocialButton from '../common/borderSocialButton'

import image from '../../utils/image'


export default ({ title, tagline, cover, avatar, socialLinks }) =>
    <div className="profile">
        <div className="page-header page-header-small" style={{ backgroundImage: `url(${image(cover)})` }}>
            <div className="filter"></div>
        </div>
        <div className={`profile-content section ${s.info}`}>
            <div className="container">
                <div className="row">
                    <div className="profile-picture">
                        <div className="fileinput fileinput-new" data-provides="fileinput">
                            <div className="fileinput-new img-no-padding">
                                <img src={image(avatar)} alt="..." />
                            </div>
                            <div className="name text-center">
                                <h2 className="title">
                                    {title}
                                    <br />
                                    <small>{tagline}</small>
                                    <div className={s.socialLinks}>
                                        {socialLinks.filter(link => link.primary).map((link, index) =>
                                            <SocialButton key={index} type={link.type} url={link.url} />
                                        )}
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>


const s = {
    socialLinks: css`
        margin-top: 0.5rem;
    `,
    info: css`
        padding-bottom: 0;
    `,
}
