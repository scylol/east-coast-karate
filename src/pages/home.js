import React from "react"
import Button from '@material-ui/core/Button';
import "./home.css"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <div className="home__intro">
      <h1 className="home__title">East Coast Karate</h1>
      <p className="home__description">
        What do I like to do? Lots of course but definitely enjoy building
        websites. What do I like to do? Lots of course but definitely enjoy
        building websites. What do I like to do? Lots of course but definitely
        enjoy building websites.
      </p>
      <Button className="home__button" variant="contained" size="large">Try for Free</Button>
    </div>
    <img className="home__image" src="/images/karate-sil.png" />
    <div className="home__image__text__container">
      <div className="home__image__text__title">
        <hr />
        <p className="home__image__text__item home__image__text__item--title">Karate.</p>
      </div>
      <p className="home__image__text__item">Haganah.</p>
      <p className="home__image__text__item">Krav Maga.</p>
      <p className="home__image__text__item">Kickboxing.</p>
    </div>
  </Layout>
)
