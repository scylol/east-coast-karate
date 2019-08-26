import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faPhone } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import "./contact.css"

export default () => (
  <Layout instructor>
    <div className="contact__container">
      <h1 className="contact__title">CONTACT US</h1>
      <div className="contact__content">
        <div className="contact__info__section">
          <div className="contact__info__intro">
            <h2 className="contact__info__header">Let's Talk</h2>
            <p className="contact__info__description">
              Call or email today to learn more about our kids and adults classes. Try
              any class you want for <span className="contact__info_bold">FREE</span>, and begin to develop your
              self-defense skills.
            </p>
            <div className="contact__phone__section">
              <span className="contact__icon__phone">
                <FontAwesomeIcon icon={faMobileAlt} />
              </span>
              <p className="contact__phoneNumber">(cell) 732-688-1517</p>
            </div>
            <span className="contact__icon__phone contact__icon__phone--home">
              <FontAwesomeIcon icon={faPhone} />
            </span>

            <p className="contact__phoneNumber">(dojo) 732-566-6666</p>
            <p className="contact__info__description">
            <span className="contact__info_bold">Located in:</span> The Aberdeen Town Square Center
            </p>
            <p className="contact__info__description">
            <span className="contact__info_bold">Address:</span> 1061 Route 34 Aberdeen, Matawan, NJ 07747
            </p>
          </div>
          <form
            className="contact__form"
            action="https://formspree.io/djd3dobbin@gmail.com"
            method="POST"
          >
            <label className="contact__label" for="contact__form__name">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="contact__form__name"
              className="contact__form__input"
              placeholder="John Doe"
            />
            <label className="contact__label" for="contact__form__email">
              EMAIL
            </label>
            <input
              type="email"
              name="_replyto"
              id="contact__form__email"
              className="contact__form__input"
              placeholder="johndoe@example.com"
            />
            <label className="contact__label" for="contact__form__message">
              MESSAGE
            </label>
            <textarea
              rows="5"
              name="message"
              id="contact__form__message"
              className="contact__form__textArea"
            ></textarea>
            <input class="contact__submit" type="submit" value="Send message" />
          </form>
        </div>
      </div>
    </div>
  </Layout>
)
