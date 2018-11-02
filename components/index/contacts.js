import React from 'react'
import Notifications, { notify as toast } from 'react-notify-toast'

import SocialButton from '@site/ui/molecules/SocialButton'

import image from '../../utils/image'
import * as notify from '../../utils/notify'
import styles from './contacts.css'


export default class Contacts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return (event) => this.setState({
      [field]: event.target.value,
    })
  }

  handleSubmit(event) {
    notify.telegram(this.state.email, this.state.name, this.state.message)
      .then(
        () => this.setState(
          { message: '' },
          () => toast.show('Сообщение отправлено', 'success')
        ),
        () => toast.show('Что-то пошло не так, попробуйте позже', 'warning')
      )

    event.preventDefault()
  }

  render() {
    const { title, cover, socialLinks } = this.props
    const { name, email, message } = this.state

    return (
      <div
        id="contact-us"
        className="contactus-1 section-image"
        style={{ backgroundImage: `url(${image(cover)})` }}
      >
        <Notifications />
        <div className="container">
          <div className="card card-contact no-transition">
            <div className={styles.container}>
              <h2 className="text-center">
                {title}<br /><br />
                {socialLinks.map((link, index) =>
                  <SocialButton key={index} type={link.type} url={link.url} />
                )}
              </h2>
              <form className="contact-form" onSubmit={this.handleSubmit}>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name">Имя</label>
                    <input
                      id="name"
                      className="form-control"
                      placeholder="Имя"
                      value={name}
                      onChange={this.handleChange('name')}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange('email')}
                    />
                  </div>
                </div>

                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="4"
                  value={message}
                  onChange={this.handleChange('message')}
                />

                <div className="row">
                  <div className="col-md-4 offset-md-4">
                    <input type="submit" className="btn btn-lg btn-fill" value="Отправить" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
