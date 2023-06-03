import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './courses.css'

const Courses = (props) => {
  return (
    <div className="courses-container">
      <Helmet>
        <title>Courses - Soft UI Pro</title>
        <meta property="og:title" content="Courses - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="courses-container1">
        <div className="courses-main">
          <div className="courses-grid">
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="courses-image"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="courses-image01"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="courses-image02"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="courses-image03"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="courses-image04"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="courses-image05"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="courses-image06"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="courses-image07"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="courses-image08"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="courses-image09"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="courses-image10"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="courses-image11"
            />
            <img
              alt="image"
              src="/iphone-4-1000w.png"
              className="courses-image12"
            />
            <img
              alt="image"
              src="/iphone-1-1000w.png"
              className="courses-image13"
            />
            <img
              alt="image"
              src="/iphone-3-1000w.png"
              className="courses-image14"
            />
            <img
              alt="image"
              src="/iphone-2-1000w.png"
              className="courses-image15"
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
      <div className="courses-container2">
        <h1 className="courses-text">Nuestros juegos...</h1>
        <div className="courses-container3">
          <div className="courses-feature-card">
            <h3 className="courses-text01">Lorem ipsum</h3>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
              className="courses-image16"
            />
            <span className="courses-text02">
              Some course about programming
            </span>
          </div>
          <div className="courses-feature-card1">
            <h3 className="courses-text03">Lorem ipsum</h3>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
              className="courses-image17"
            />
            <span className="courses-text04">
              Some course about programming
            </span>
          </div>
          <div className="courses-feature-card2">
            <h3 className="courses-text05">Lorem ipsum</h3>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
              className="courses-image18"
            />
            <span className="courses-text06">
              Some course about programming
            </span>
          </div>
          <div className="courses-feature-card3">
            <h3 className="courses-text07">Lorem ipsum</h3>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&amp;ixlib=rb-1.2.1&amp;w=200"
              className="courses-image19"
            />
            <span className="courses-text08">
              Some course about programming
            </span>
          </div>
          <svg viewBox="0 0 1024 1024" className="courses-icon">
            <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="courses-icon2">
            <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </div>
        <iframe
          src="https://www.youtube.com/embed/DeQkMK5LME4"
          className="courses-iframe"
        ></iframe>
        <label className="courses-text09">
          <span>Nuestro curso</span>
          <br></br>
          <span>de la semana</span>
          <br></br>
        </label>
        <label className="courses-text14">
          <span>Ir al curso →</span>
          <br></br>
        </label>
        <input
          type="text"
          placeholder="Buscar curso"
          className="courses-textinput input"
        />
        <svg viewBox="0 0 1024 1024" className="courses-icon4">
          <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
        </svg>
      </div>
      <svg viewBox="0 0 1024 1024" className="courses-icon6">
        <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
      </svg>
    </div>
  )
}

export default Courses
