import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import "./home.css"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <div className="home__intro">
      <h1 className="home__title">
        East Coast <span className="home__title home__title--red">Karate</span>
      </h1>
      <p className="home__description">
        What do I like to do? Lots of course but definitely enjoy building
        websites. What do I like to do? Lots of course but definitely enjoy
        building websites. What do I like to do? Lots of course but definitely
        enjoy building websites.
      </p>
      <Button className="home__button" variant="contained" size="large">
        <Link className="home__button__link" to="/contact/">Try for Free</Link>
      </Button>
    </div>
    <div className="home__image__container">
      <img
        className="home__image home__image--first"
        src="/images/sil1.png"
        alt="silhouette"
      />
      <img
        className="home__image home__image--second"
        src="/images/sil2.png"
        alt="silhouette"
      />
      <img
        className="home__image home__image--third"
        src="/images/sil3.png"
        alt="silhouette"
      />
      <img
        className="home__image home__image--fourth"
        src="/images/sil4.png"
        alt="silhouette"
      />
      <div className="home__image__text__container">
        <div className="home__image__text__title">
          <div className="home__line home__line--title" />
          <p className="home__image__text__item home__image__text__item--title">
            Karate.
          </p>
        </div>
        <div className="home__image__text__title">
          <div className="home__line home__line--second" />
          <p className="home__image__text__item home__image__text__item--second">
            Haganah.
          </p>
        </div>
        <div className="home__image__text__title">
          <div className="home__line home__line--third" />
          <p className="home__image__text__item home__image__text__item--third">
            Krav Maga.
          </p>
        </div>
        <div className="home__image__text__title">
          <div className="home__line home__line--fourth" />
          <p className="home__image__text__item home__image__text__item--fourth">
            Kickboxing.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
