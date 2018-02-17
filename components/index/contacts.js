import { css } from 'emotion'

import SocialButton from '../common/borderSocialButton'

import image from '../../utils/image'
import { telegram } from '../../utils/notify'


export default ({ title, cover, socialLinks }) => 
    <div className="contactus-1 section-image" style={{ backgroundImage: `url(${image(cover)})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                    <div className={`card card-contact no-transition ${s.container}`}>
                        <h3 className="card-title text-center">
                            {title} <br /><br />
                            {socialLinks.map((link, index) =>
                                <SocialButton key={index} type={link.type} url={link.url} />
                            )}
                        </h3>
                        <div className="row">
                            <div className="col-md-5 ml-auto">
                                <div className="card-body">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">kamyshev@qeep.pro</h4>
                                            {/* <p>email</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mr-auto">
                                <div className="card-body">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">8 999 495 50 33</h4>
                                            {/* <p>phone</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


const s = {
    container: css`
        padding-top: 2rem;
        padding-bottom: 2rem;
    `,
}
