import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <section class="coming-soon-banner">
        <img src="img/fragmiint.svg"/>
        <div class="music-branding">
          <a href="https://open.spotify.com/album/2rZxoCObBFfJ42Evzlznxs" class="spotify"><img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/spotify_rounded-512.png" /></a>
          <a href="https://music.apple.com/us/album/silent-methods-single/1480581567?ign-mpt=uo%3D4" class="apple"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png" /></a>
          <a href="https://play.google.com/store/music/album/Fragmiint_Silent_Methods?id=Bxavsydmhk3an6x7duvgigvzp3m" class="google"><img src="https://cdn0.iconfinder.com/data/icons/social-23/100/social_google_play-512.png" /></a>
          <a href="https://www.youtube.com/watch?v=0tX4cZnbtwE&list=OLAK5uy_myJDRC3PRiELLgKrDeNBZTripFG73su2I" class="yt"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-512.png" /></a>
          <a href="https://tidal.com/browse/album/118273450" class="tidal"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/tidal-512.png" /></a>
        </div>
        <p>COMING SOON</p>
      </section>
      {/*<Navbar />*/}
      {/*<div>{children}</div>*/}
      {/*<Footer />*/}
    </div>
  )
}

export default TemplateWrapper
