import image from '../../utils/image'


export default ({ title, tagline, cover, avatar }) =>
    <div className="profile">
        <div className="page-header page-header-small" style={{ backgroundImage: `url(${image(cover)})` }}>
            <div className="filter"></div>
        </div>
        <div className="profile-content section">
            <div className="container">
                <div className="row">
                    <div className="profile-picture">
                        <div className="fileinput fileinput-new" data-provides="fileinput">
                            <div className="fileinput-new img-no-padding">
                                <img src={image(avatar)} alt="..." />
                            </div>
                            <div className="name">
                                <h4 className="title text-center">
                                    {title}
                                    <br />
                                    <small>{tagline}</small>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
