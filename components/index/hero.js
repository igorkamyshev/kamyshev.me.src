import cx from 'classnames'

import SocialButton from '@site/ui/molecules/SocialButton'

import image from '../../utils/image'
import styles from './hero.css'

export default ({ title, tagline, avatar, socialLinks, children }) =>
  <div className="profile">
    {children}
    <div className={cx('profile-content', 'section', styles.info)}>
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
                  <div className={styles.socialLinks}>
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
