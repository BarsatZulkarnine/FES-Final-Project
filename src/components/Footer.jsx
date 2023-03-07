import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="row row__column">
        <a href="#">
          <figure className="footer__logo">
            <img src="assets/Library.svg" className="footer__logo--img" alt=""/>
          </figure>
        </a>
        <div className="footer__list">
          <a href="#" className="footer__link">Home</a>
          <a className="footer__link no-cursor">About</a>
          <a href="#features" className="footer__link">Books</a>
          <a className="footer__link no-cursor">Contact</a>
        </div>
        <div className="footer__copyright">Copyright &copy; 2021 Library</div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
