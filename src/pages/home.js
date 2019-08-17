import React from "react"
import Button from "@material-ui/core/Button"
import anime from "animejs/lib/anime.es.js"
import "./home.css"
import Layout from "../components/layout"
export class Home extends React.Component {
  componentDidMount = () => {
    // let lineTimeline = anime.timeline({
    //   easing: 'easeOutExpo',
    //   duration: 300,
    // });
    // // Add children
    // lineTimeline
    // .add({
    //   targets: '.home__line',
    //   translateY: 40,
    // }, '+=4500')
    // .add({
    //   targets: '.home__line',
    //   translateY: 80,
    // }, '+=4750')
    // .add({
    //   targets: '.home__line',
    //   translateY: 120,
    // }, '+=4750')
    // .add({
    //   targets: '.home__line',
    //   translateY: 0,
    // }, '+=4750');
  }
  render() {
    return (
      <Layout>
        <div className="home__intro">
          <h1 className="home__title">
            East Coast{" "}
            <span className="home__title home__title--red">Karate</span>
          </h1>
          <p className="home__description">
            What do I like to do? Lots of course but definitely enjoy building
            websites. What do I like to do? Lots of course but definitely enjoy
            building websites. What do I like to do? Lots of course but
            definitely enjoy building websites.
          </p>
          <Button className="home__button" variant="contained" size="large">
            Try for Free
          </Button>
        </div>
        <img
          className="home__image"
          src="/images/karate-sil.png"
          alt="silhouette"
        />
        <div className="home__image__text__container">
          <div className="home__image__text__title">
            <hr className="home__line home__line--title" />
            <p className="home__image__text__item home__image__text__item--title">
              Karate.
            </p>
          </div>
          <div className="home__image__text__title">
            <hr className="home__line home__line--second" />
            <p className="home__image__text__item home__image__text__item--second">
              Haganah.
            </p>
          </div>
          <div className="home__image__text__title">
            <hr className="home__line home__line--third" />
            <p className="home__image__text__item home__image__text__item--third">
              Krav Maga.
            </p>
          </div>
          <div className="home__image__text__title">
            <hr className="home__line home__line--fourth" />
            <p className="home__image__text__item home__image__text__item--fourth">
              Kickboxing.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
